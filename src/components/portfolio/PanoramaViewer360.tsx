'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  Play, 
  Pause,
  Loader2,
  Move
} from 'lucide-react';

interface PanoramaViewer360Props {
  imageUrl: string;
  title?: string;
  autoRotateSpeed?: number; // degrees per frame
}

export default function PanoramaViewer360({
  imageUrl,
  title = 'Virtual Tour 360° Panorama',
  autoRotateSpeed = 0.15,
}: PanoramaViewer360Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // References for three.js state
  const stateRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    mesh?: THREE.Mesh;
    animationId?: number;
    isUserInteracting: boolean;
    onMouseDownMouseX: number;
    onMouseDownMouseY: number;
    lon: number;
    onMouseDownLon: number;
    lat: number;
    onMouseDownLat: number;
    phi: number;
    theta: number;
  }>({
    isUserInteracting: false,
    onMouseDownMouseX: 0,
    onMouseDownMouseY: 0,
    lon: 0,
    onMouseDownLon: 0,
    lat: 0,
    onMouseDownLat: 0,
    phi: 0,
    theta: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setLoading(true);
    setError(null);

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera (inside the sphere)
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);

    // 3. Sphere Geometry with inverted normals (so inside is visible)
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert geometry to view from inside

    // 4. Texture Loader
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';

    let mesh: THREE.Mesh;

    textureLoader.load(
      imageUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error('Failed to load 360 texture:', err);
        setError('Gagal memuat panorama 360. Pastikan gambar equirectangular dapat diakses.');
        setLoading(false);
      }
    );

    // 5. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    stateRef.current.renderer = renderer;
    stateRef.current.scene = scene;
    stateRef.current.camera = camera;

    // Interaction Handlers (Mouse / Touch)
    const onPointerDown = (event: PointerEvent) => {
      setShowHint(false);
      stateRef.current.isUserInteracting = true;
      stateRef.current.onMouseDownMouseX = event.clientX;
      stateRef.current.onMouseDownMouseY = event.clientY;
      stateRef.current.onMouseDownLon = stateRef.current.lon;
      stateRef.current.onMouseDownLat = stateRef.current.lat;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (stateRef.current.isUserInteracting) {
        stateRef.current.lon =
          (stateRef.current.onMouseDownMouseX - event.clientX) * 0.15 +
          stateRef.current.onMouseDownLon;
        stateRef.current.lat =
          (event.clientY - stateRef.current.onMouseDownMouseY) * 0.15 +
          stateRef.current.onMouseDownLat;
      }
    };

    const onPointerUp = () => {
      stateRef.current.isUserInteracting = false;
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (!camera) return;
      const fov = camera.fov + event.deltaY * 0.05;
      camera.fov = THREE.MathUtils.clamp(fov, 30, 95);
      camera.updateProjectionMatrix();
    };

    const onResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const state = stateRef.current;
      if (!state.isUserInteracting && autoRotate) {
        state.lon += autoRotateSpeed;
      }

      state.lat = Math.max(-85, Math.min(85, state.lat));
      state.phi = THREE.MathUtils.degToRad(90 - state.lat);
      state.theta = THREE.MathUtils.degToRad(state.lon);

      const targetX = 500 * Math.sin(state.phi) * Math.cos(state.theta);
      const targetY = 500 * Math.cos(state.phi);
      const targetZ = 500 * Math.sin(state.phi) * Math.sin(state.theta);

      camera.lookAt(targetX, targetY, targetZ);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
    };
  }, [imageUrl, autoRotate, autoRotateSpeed]);

  const toggleFullscreen = () => {
    const el = containerRef.current?.parentElement;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleZoom = (direction: 'in' | 'out') => {
    const camera = stateRef.current.camera;
    if (!camera) return;
    const step = direction === 'in' ? -10 : 10;
    camera.fov = THREE.MathUtils.clamp(camera.fov + step, 30, 95);
    camera.updateProjectionMatrix();
  };

  const resetView = () => {
    stateRef.current.lon = 0;
    stateRef.current.lat = 0;
    if (stateRef.current.camera) {
      stateRef.current.camera.fov = 75;
      stateRef.current.camera.updateProjectionMatrix();
    }
  };

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[380px] bg-stone-950 rounded-xs overflow-hidden border border-stone-800 shadow-2xl select-none group">
      {/* 360 Three.js Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing" 
      />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-stone-950/90 flex flex-col items-center justify-center gap-3 text-white z-20">
          <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
          <p className="text-xs uppercase tracking-widest text-stone-300">
            Memuat Render Panorama 360°...
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="absolute inset-0 bg-stone-950/90 flex items-center justify-center p-6 text-center z-20">
          <p className="text-xs text-rose-400 max-w-md">{error}</p>
        </div>
      )}

      {/* Floating Header Banner */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white pointer-events-none">
        <Compass className="w-4 h-4 text-amber-400 animate-pulse" />
        <span className="text-xs font-semibold tracking-wide">{title}</span>
        <span className="bg-amber-500 text-stone-950 text-[10px] font-bold px-1.5 py-0.2 rounded-full uppercase">
          360°
        </span>
      </div>

      {/* Interactive Helper Hint */}
      {showHint && !loading && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 pointer-events-none animate-bounce">
          <Move className="w-4 h-4 text-amber-400" />
          <span>Klik & geser mouse untuk melihat ke segala arah</span>
        </div>
      )}

      {/* Control Toolbar */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1.5 rounded-full border border-white/15 text-white shadow-lg">
        {/* Play/Pause Auto Rotate */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
            autoRotate ? 'bg-amber-600 text-white' : 'hover:bg-white/10 text-stone-300'
          }`}
          title={autoRotate ? 'Hentikan Putaran Otomatis' : 'Putar Otomatis'}
        >
          {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Reset View */}
        <button
          onClick={resetView}
          className="w-8 h-8 rounded-full hover:bg-white/10 text-stone-300 hover:text-white flex items-center justify-center transition"
          title="Reset Sudut Pandang"
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>

        {/* Zoom In */}
        <button
          onClick={() => handleZoom('in')}
          className="w-8 h-8 rounded-full hover:bg-white/10 text-stone-300 hover:text-white flex items-center justify-center transition"
          title="Zoom In"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>

        {/* Zoom Out */}
        <button
          onClick={() => handleZoom('out')}
          className="w-8 h-8 rounded-full hover:bg-white/10 text-stone-300 hover:text-white flex items-center justify-center transition"
          title="Zoom Out"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="w-8 h-8 rounded-full hover:bg-white/10 text-stone-300 hover:text-white flex items-center justify-center transition"
          title="Layar Penuh"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}

