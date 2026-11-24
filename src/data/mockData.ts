import { Project, ServiceItem, TestimonialItem, ConsultationRequest, PackageItem } from '@/types';

export const INITIAL_PROJECTS: Project[] = [
  {
    "id": "proj-1",
    "code": "SP-101",
    "title": "Grand Villa Lumina",
    "slug": "grand-villa-lumina",
    "category": "Villa",
    "style": "Modern Tropis",
    "location": "Canggu, Bali",
    "year": 2025,
    "floors": 2,
    "buildingArea": 550,
    "landArea": 750,
    "bedrooms": 5,
    "bathrooms": 6,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    "description": "Desain villa peristirahatan mewah dengan pendekatan arsitektur modern tropis yang mengoptimalkan sirkulasi udara alami dan bukaan kaca masif ke arah kolam renang infinity.",
    "concept": "Harmonisasi antara material alam seperti kayu ulin, batu paras lokal, dan elemen kaca minimalis. Tata ruang dirancang fleksibel dengan konsep open-plan living room yang menyatu dengan taman tropis.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-1-1",
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Grand Villa Lumina (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-1-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-1-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-1-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-1-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-2",
    "code": "SP-102",
    "title": "The Royal Sovereign Mansion",
    "slug": "the-royal-sovereign-mansion",
    "category": "Rumah Tinggal",
    "style": "Klasik Mewah",
    "location": "Pondok Indah, Jakarta Selatan",
    "year": 2025,
    "floors": 3,
    "buildingArea": 850,
    "landArea": 1000,
    "bedrooms": 6,
    "bathrooms": 7,
    "garages": 4,
    "thumbnail": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "description": "Hunian megah bergaya klasik Eropa dengan pilar-pilar kokoh bernuansa modern, menghadirkan estetika prestisius yang tak lekang oleh waktu.",
    "concept": "Proporsi simetris klasik yang dipadukan dengan fasad travertin bertekstur hangat. Dilengkapi grand foyer setinggi 8 meter dan tangga lengkung monumental.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-2-1",
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama The Royal Sovereign Mansion (Klasik Mewah) dengan pencahayaan dramatis."
      },
      {
        "id": "img-2-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-2-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-2-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-2-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-3",
    "code": "SP-103",
    "title": "The Ironwood Loft & Office",
    "slug": "the-ironwood-loft-office",
    "category": "Komersial & Kantor",
    "style": "Industrial Modern",
    "location": "Dago Pakar, Bandung",
    "year": 2024,
    "floors": 3,
    "buildingArea": 620,
    "landArea": 800,
    "bedrooms": 2,
    "bathrooms": 4,
    "garages": 6,
    "thumbnail": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "description": "Bangunan mixed-use studio kreatif dan hunian eksklusif di perbukitan Dago dengan fasad baja corten dan bata ekspos presisi tinggi.",
    "concept": "Mengedepankan ekspresi struktur rangka baja hitam kokoh dengan bukaan kaca skylight raksasa untuk efisiensi energi alami.",
    "isFeatured": true,
    "constructionStatus": "Tahap Konstruksi",
    "status": "Published",
    "images": [
      {
        "id": "img-3-1",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama The Ironwood Loft & Office (Industrial Modern) dengan pencahayaan dramatis."
      },
      {
        "id": "img-3-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-3-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-3-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-3-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-4",
    "code": "SP-104",
    "title": "Serenity Minimalist Pavilion",
    "slug": "serenity-minimalist-pavilion",
    "category": "Rumah Tinggal",
    "style": "Minimalis Kontemporer",
    "location": "BSD City, Tangerang Selatan",
    "year": 2024,
    "floors": 2,
    "buildingArea": 380,
    "landArea": 450,
    "bedrooms": 4,
    "bathrooms": 4,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "description": "Rumah tinggal modern berkarakter clean lines dengan permainan bidang geometris yang tegas dan inner courtyard hijau yang menenangkan.",
    "concept": "Prinsip less is more dengan permainan cahaya alami yang dinamis sepanjang hari melalui kisi-kisi kayu komposit.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-4-1",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Serenity Minimalist Pavilion (Minimalis Kontemporer) dengan pencahayaan dramatis."
      },
      {
        "id": "img-4-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-4-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-4-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-4-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-5",
    "code": "SP-105",
    "title": "Azure Coast Residence",
    "slug": "azure-coast-residence",
    "category": "Rumah Tinggal",
    "style": "Mediterania",
    "location": "Surabaya Barat, Jawa Timur",
    "year": 2024,
    "floors": 2,
    "buildingArea": 480,
    "landArea": 600,
    "bedrooms": 4,
    "bathrooms": 5,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    "description": "Hunian peristirahatan elegan bergaya modern Mediterranean dengan lengkungan arch lembut, dinding bertekstur stuko putih, dan patio beratap pergola kayu.",
    "concept": "Kenyamanan resort pesisir dengan sirkulasi udara optimal dan pencahayaan alami melimpah.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-5-1",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Azure Coast Residence (Mediterania) dengan pencahayaan dramatis."
      },
      {
        "id": "img-5-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-5-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-5-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-5-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-6",
    "code": "SP-106",
    "title": "Penthouse Skyline Suite",
    "slug": "penthouse-skyline-suite",
    "category": "Desain Interior",
    "style": "Modern Tropis",
    "location": "Sudirman, Jakarta Pusat",
    "year": 2024,
    "floors": 1,
    "buildingArea": 220,
    "bedrooms": 3,
    "bathrooms": 3,
    "thumbnail": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    "description": "Proyek renovasi interior penthouse mewah lantai 42 dengan panorama lanskap cakrawala kota metropolitan Jakarta.",
    "concept": "Mengawinkan kemewahan hotel bintang lima dengan kehangatan hunian privat menggunakan panel dinding bersembunyi dan smart lighting automation.",
    "isFeatured": true,
    "constructionStatus": "Tahap Konstruksi",
    "status": "Published",
    "images": [
      {
        "id": "img-6-1",
        "url": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Penthouse Skyline Suite (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-6-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-6-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-6-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-6-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-7",
    "code": "SP-107",
    "title": "The Sanctuary Hill Villa",
    "slug": "the-sanctuary-hill-villa",
    "category": "Villa",
    "style": "Modern Tropis",
    "location": "Seminyak, Bali",
    "year": 2025,
    "floors": 2,
    "buildingArea": 620,
    "landArea": 900,
    "bedrooms": 5,
    "bathrooms": 6,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa pribadi dengan infinity pool bertingkat dan lanskap tropis privat di pusat Seminyak.",
    "concept": "Arsitektur responsif iklim dengan kanopi atap lebar dan dinding kisi kayu ulin daur ulang.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-7-1",
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama The Sanctuary Hill Villa (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-7-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-7-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-7-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-7-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-8",
    "code": "SP-108",
    "title": "Cilandak Courtyard Residence",
    "slug": "cilandak-courtyard-residence",
    "category": "Rumah Tinggal",
    "style": "Modern Tropis",
    "location": "Cilandak, Jakarta Selatan",
    "year": 2025,
    "floors": 2,
    "buildingArea": 510,
    "landArea": 680,
    "bedrooms": 4,
    "bathrooms": 5,
    "garages": 3,
    "thumbnail": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "description": "Rumah keluarga dengan inner courtyard asri di tengah bangunan, menghadirkan oase hijau privat di pusat Jakarta.",
    "concept": "Integrasi ruang komunal dengan taman dalam rumah melalui bukaan pintu geser tanpa kusen masif.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-8-1",
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Cilandak Courtyard Residence (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-8-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-8-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-8-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-8-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-9",
    "code": "SP-109",
    "title": "Batu Bolong Sunset Villa",
    "slug": "batu-bolong-sunset-villa",
    "category": "Villa",
    "style": "Modern Tropis",
    "location": "Canggu, Bali",
    "year": 2025,
    "floors": 3,
    "buildingArea": 720,
    "landArea": 850,
    "bedrooms": 6,
    "bathrooms": 7,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa luxury bertingkat 3 dengan rooftop deck sunset lounge yang menghadap langsung ke arah Samudra Hindia.",
    "concept": "Penggunaan batu alam sukabumi dan beton ekspos hangat berpadu dengan aksen kuningan mewah.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-9-1",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Batu Bolong Sunset Villa (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-9-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-9-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-9-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-9-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-10",
    "code": "SP-110",
    "title": "Ubud Rainforest Glasshouse",
    "slug": "ubud-rainforest-glasshouse",
    "category": "Villa",
    "style": "Minimalis Kontemporer",
    "location": "Ubud, Bali",
    "year": 2024,
    "floors": 2,
    "buildingArea": 420,
    "landArea": 1200,
    "bedrooms": 3,
    "bathrooms": 4,
    "garages": 1,
    "thumbnail": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    "description": "Paviliun kaca modern di tepi lembah sungai Ayung yang menghanyutkan keindahan hutan hujan ke dalam interior.",
    "concept": "Desain minimal struktural dengan kolom baja ramping agar lanskap alam menjadi aktor utama.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-10-1",
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Ubud Rainforest Glasshouse (Minimalis Kontemporer) dengan pencahayaan dramatis."
      },
      {
        "id": "img-10-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-10-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-10-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-10-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-11",
    "code": "SP-111",
    "title": "Menteng Heritage Modern",
    "slug": "menteng-heritage-modern",
    "category": "Rumah Tinggal",
    "style": "Klasik Mewah",
    "location": "Menteng, Jakarta Pusat",
    "year": 2024,
    "floors": 2,
    "buildingArea": 680,
    "landArea": 900,
    "bedrooms": 5,
    "bathrooms": 6,
    "garages": 4,
    "thumbnail": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    "description": "Restorasi arsitektur kolonial tropis dengan pembaruan fasad klasik modern berstandar hunian diplomatik tinggi.",
    "concept": "Pelestarian proporsi fasad historis Menteng berpadu dengan teknologi hunian cerdas dan material marmer italia.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-11-1",
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Menteng Heritage Modern (Klasik Mewah) dengan pencahayaan dramatis."
      },
      {
        "id": "img-11-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-11-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-11-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-11-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-12",
    "code": "SP-112",
    "title": "Nordic Zen Living Suite",
    "slug": "nordic-zen-living-suite",
    "category": "Desain Interior",
    "style": "Minimalis Kontemporer",
    "location": "Dharmahusada, Surabaya",
    "year": 2024,
    "floors": 2,
    "buildingArea": 340,
    "landArea": 400,
    "bedrooms": 3,
    "bathrooms": 3,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    "description": "Konsep hunian bergaya Japandi minimalis dengan material kayu oak hangat dan pencahayaan alami yang lembut.",
    "concept": "Ketenangan ruang melalui kesederhanaan tata letak dan material natural tanpa dekorasi berlebihan.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-12-1",
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Nordic Zen Pavilion (Minimalis Kontemporer) dengan pencahayaan dramatis."
      },
      {
        "id": "img-12-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-12-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-12-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-12-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-13",
    "code": "SP-113",
    "title": "Uluwatu Cliffside Villa",
    "slug": "uluwatu-cliffside-villa",
    "category": "Villa",
    "style": "Modern Tropis",
    "location": "Uluwatu, Bali",
    "year": 2025,
    "floors": 2,
    "buildingArea": 780,
    "landArea": 1100,
    "bedrooms": 5,
    "bathrooms": 6,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa tebing spektakuler dengan cantilever infinity pool yang tampak melayang di atas laut biru samudra.",
    "concept": "Struktur balok konsol berani yang memaksimalkan panorama samudra tanpa batas.",
    "isFeatured": true,
    "constructionStatus": "Tahap Konstruksi",
    "status": "Published",
    "images": [
      {
        "id": "img-13-1",
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Uluwatu Cliffside Villa (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-13-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-13-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-13-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-13-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-14",
    "code": "SP-114",
    "title": "Punclut Highland Resort & Cafe",
    "slug": "punclut-highland-resort-cafe",
    "category": "Komersial & Kantor",
    "style": "Industrial Modern",
    "location": "Punclut, Bandung",
    "year": 2023,
    "floors": 2,
    "buildingArea": 460,
    "landArea": 700,
    "bedrooms": 4,
    "bathrooms": 4,
    "garages": 3,
    "thumbnail": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa peristirahatan di lereng bukit dengan udara sejuk Bandung, dinding batu andesit lokal dan perapian modern.",
    "concept": "Kontur tanah alami dimanfaatkan untuk menciptakan zonasi bertingkat yang menyatu dengan lanskap kebun teh.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-14-1",
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Punclut Highland Retreat (Industrial Modern) dengan pencahayaan dramatis."
      },
      {
        "id": "img-14-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-14-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-14-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-14-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-15",
    "code": "SP-115",
    "title": "Kemang Urban Oasis",
    "slug": "kemang-urban-oasis",
    "category": "Rumah Tinggal",
    "style": "Modern Tropis",
    "location": "Kemang, Jakarta Selatan",
    "year": 2024,
    "floors": 2,
    "buildingArea": 490,
    "landArea": 650,
    "bedrooms": 4,
    "bathrooms": 5,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    "description": "Rumah tinggal modern dengan taman vertikal, kolam renang privat dan ruang keluarga terbuka di area Kemang.",
    "concept": "Filter polusi dan kebisingan kota melalui buffer vegetasi rimbun dan dinding air terjun buatan.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-15-1",
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Kemang Urban Oasis (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-15-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-15-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-15-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-15-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-16",
    "code": "SP-116",
    "title": "The Palm Haven Sanur",
    "slug": "the-palm-haven-sanur",
    "category": "Villa",
    "style": "Mediterania",
    "location": "Sanur, Bali",
    "year": 2024,
    "floors": 1,
    "buildingArea": 320,
    "landArea": 550,
    "bedrooms": 3,
    "bathrooms": 3,
    "garages": 1,
    "thumbnail": "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=80",
    "description": "Single-storey resort villa dengan atmosfer Mediterania santai berjarak hanya 200 meter dari pantai Sanur.",
    "concept": "Semua ruangan memiliki akses langsung ke kolam renang tengah bergaya courtyard Yunani.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-16-1",
        "url": "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama The Palm Haven Sanur (Mediterania) dengan pencahayaan dramatis."
      },
      {
        "id": "img-16-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-16-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-16-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-16-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-17",
    "code": "SP-117",
    "title": "Alam Sutera Linear House",
    "slug": "alam-sutera-linear-house",
    "category": "Rumah Tinggal",
    "style": "Minimalis Kontemporer",
    "location": "Alam Sutera, Tangerang",
    "year": 2023,
    "floors": 2,
    "buildingArea": 410,
    "landArea": 500,
    "bedrooms": 4,
    "bathrooms": 4,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    "description": "Desain rumah sudut dengan bentuk gubahan massa kubistik yang tegas dan pencahayaan arsitektural malam hari.",
    "concept": "Gubahan massa linier yang memecah paparan sinar matahari barat menggunakan kisi alumunium louvre.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-17-1",
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Alam Sutera Linear House (Minimalis Kontemporer) dengan pencahayaan dramatis."
      },
      {
        "id": "img-17-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-17-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-17-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-17-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-18",
    "code": "SP-118",
    "title": "SCBD Creative Hub & Lounge",
    "slug": "scbd-creative-hub-lounge",
    "category": "Komersial & Kantor",
    "style": "Industrial Modern",
    "location": "SCBD, Jakarta Selatan",
    "year": 2025,
    "floors": 4,
    "buildingArea": 950,
    "landArea": 800,
    "bedrooms": 1,
    "bathrooms": 8,
    "garages": 10,
    "thumbnail": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    "description": "Kantor boutique berstandar internasional dengan working cafe, amphitheater mini, dan executive boardroom berteknologi canggih.",
    "concept": "Mendorong kolaborasi dinamis melalui ruang kerja tanpa sekat dengan fleksibilitas tinggi.",
    "isFeatured": false,
    "constructionStatus": "Desain Konsep",
    "status": "Published",
    "images": [
      {
        "id": "img-18-1",
        "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama SCBD Creative Hub & Lounge (Industrial Modern) dengan pencahayaan dramatis."
      },
      {
        "id": "img-18-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-18-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-18-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-18-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-19",
    "code": "SP-119",
    "title": "Senggigi Oceanview Villa",
    "slug": "senggigi-oceanview-villa",
    "category": "Villa",
    "style": "Modern Tropis",
    "location": "Senggigi, Lombok",
    "year": 2024,
    "floors": 2,
    "buildingArea": 530,
    "landArea": 950,
    "bedrooms": 4,
    "bathrooms": 5,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa pantai di pulau Lombok yang menyuguhkan pemandangan langsung ke arah Gunung Agung Bali di seberang selat.",
    "concept": "Pemanfaatan angin laut untuk sistem ventilasi alami silang yang mengurangi penggunaan AC hingga 60%.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-19-1",
        "url": "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Senggigi Oceanview Villa (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-19-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-19-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-19-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-19-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-20",
    "code": "SP-120",
    "title": "Modern Heritage Interior Suite",
    "slug": "modern-heritage-interior-suite",
    "category": "Desain Interior",
    "style": "Modern Tropis",
    "location": "Sleman, Yogyakarta",
    "year": 2023,
    "floors": 2,
    "buildingArea": 440,
    "landArea": 750,
    "bedrooms": 4,
    "bathrooms": 4,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "description": "Reinterpretasi arsitektur Joglo Jawa dalam gubahan modern kontemporer yang elegan dan hangat.",
    "concept": "Struktur tumpang sari kayu jati kuno dilindungi selubung kaca ganda modern untuk efisiensi termal.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-20-1",
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Sleman Modern Joglosed (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-20-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-20-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-20-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-20-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-21",
    "code": "SP-121",
    "title": "Citraland Lakeside Manor",
    "slug": "citraland-lakeside-manor",
    "category": "Rumah Tinggal",
    "style": "Klasik Mewah",
    "location": "Citraland, Surabaya",
    "year": 2025,
    "floors": 3,
    "buildingArea": 920,
    "landArea": 1200,
    "bedrooms": 6,
    "bathrooms": 7,
    "garages": 4,
    "thumbnail": "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=80",
    "description": "Mansion mewah tepi danau dengan fasad berkarakter Neoklasik Amerika, dermaga pribadi dan kolam renang formal.",
    "concept": "Tata ruang simetris monumental dengan ballroom privat dan wine cellar bawah tanah.",
    "isFeatured": false,
    "constructionStatus": "Tahap Konstruksi",
    "status": "Published",
    "images": [
      {
        "id": "img-21-1",
        "url": "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Citraland Lakeside Manor (Klasik Mewah) dengan pencahayaan dramatis."
      },
      {
        "id": "img-21-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-21-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-21-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-21-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-22",
    "code": "SP-122",
    "title": "Senopati Culinary Glasshouse",
    "slug": "senopati-culinary-glasshouse",
    "category": "Komersial & Kantor",
    "style": "Minimalis Kontemporer",
    "location": "Senopati, Jakarta Selatan",
    "year": 2024,
    "floors": 2,
    "buildingArea": 390,
    "landArea": 480,
    "bedrooms": 0,
    "bathrooms": 4,
    "garages": 6,
    "thumbnail": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "description": "Restoran fine-dining dengan konsep konservatori kaca hijau di kawasan prestisius Senopati.",
    "concept": "Memadukan pengalaman bersantap dengan keasrian tanaman botani indoor di bawah langit-langit kaca transparan.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-22-1",
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Senopati Culinary Glasshouse (Minimalis Kontemporer) dengan pencahayaan dramatis."
      },
      {
        "id": "img-22-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-22-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-22-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-22-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-23",
    "code": "SP-123",
    "title": "Jimbaran Bay Residence",
    "slug": "jimbaran-bay-residence",
    "category": "Villa",
    "style": "Modern Tropis",
    "location": "Jimbaran, Bali",
    "year": 2024,
    "floors": 2,
    "buildingArea": 580,
    "landArea": 800,
    "bedrooms": 4,
    "bathrooms": 5,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    "description": "Hunian villa tropis di perbukitan Jimbaran dengan material batu kapur putih khas Bukit Peninsula.",
    "concept": "Atap miring asimetris yang menangkap angin laut dan memberikan peneduh dramatis.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-23-1",
        "url": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Jimbaran Bay Residence (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-23-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-23-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-23-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-23-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-24",
    "code": "SP-124",
    "title": "Puri Botanical Residence",
    "slug": "puri-botanical-residence",
    "category": "Rumah Tinggal",
    "style": "Modern Tropis",
    "location": "Puri Indah, Jakarta Barat",
    "year": 2023,
    "floors": 2,
    "buildingArea": 360,
    "landArea": 420,
    "bedrooms": 4,
    "bathrooms": 4,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    "description": "Rumah tinggal ramah lingkungan dengan roof garden, solar panel, dan sistem penampungan air hujan terintegrasi.",
    "concept": "Arsitektur berkelanjutan yang meminimalkan jejak karbon keluarga urban.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-24-1",
        "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Puri Botanical Residence (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-24-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-24-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-24-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-24-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-25",
    "code": "SP-125",
    "title": "Nusa Dua Horizon Villa",
    "slug": "nusa-dua-horizon-villa",
    "category": "Villa",
    "style": "Modern Tropis",
    "location": "Nusa Dua, Bali",
    "year": 2025,
    "floors": 2,
    "buildingArea": 710,
    "landArea": 980,
    "bedrooms": 5,
    "bathrooms": 6,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa eksklusif dengan kolam renang infinity 25 meter dan ruang terbuka untuk hiburan keluarga besar.",
    "concept": "Zonasi privat dan entertain yang terpisah dengan jembatan penghubung transparan di atas kolam.",
    "isFeatured": false,
    "constructionStatus": "Desain Konsep",
    "status": "Published",
    "images": [
      {
        "id": "img-25-1",
        "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Nusa Dua Horizon Villa (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-25-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-25-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-25-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-25-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-26",
    "code": "SP-126",
    "title": "Padma Valley Boutique Hotel",
    "slug": "padma-valley-boutique-hotel",
    "category": "Komersial & Kantor",
    "style": "Industrial Modern",
    "location": "Lembang, Bandung",
    "year": 2023,
    "floors": 2,
    "buildingArea": 430,
    "landArea": 650,
    "bedrooms": 3,
    "bathrooms": 4,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa berkarakter rustic-modern di tengah perbukitan pinus dengan kaca-kaca berukuran besar menghadap kabut Lembang.",
    "concept": "Harmoni antara kehangatan kayu pinus solid dengan ketegasan profil baja hitam ekspos.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-26-1",
        "url": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Padma Valley Sanctuary (Industrial Modern) dengan pencahayaan dramatis."
      },
      {
        "id": "img-26-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-26-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-26-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-26-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-27",
    "code": "SP-127",
    "title": "PIK 2 Waterfront Loft",
    "slug": "pik-2-waterfront-loft",
    "category": "Desain Interior",
    "style": "Minimalis Kontemporer",
    "location": "PIK 2, Tangerang",
    "year": 2024,
    "floors": 2,
    "buildingArea": 280,
    "bedrooms": 3,
    "bathrooms": 3,
    "thumbnail": "https://images.unsplash.com/photo-1502005229762-ee1b2da92445?auto=format&fit=crop&w=1200&q=80",
    "description": "Desain interior modern minimalis hunian tepi laut dengan palet warna monokromatik dan aksen kayu walnut.",
    "concept": "Pemanfaatan double-volume ceiling untuk instalasi seni pencahayaan kustom dan mezanin perpustakaan.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-27-1",
        "url": "https://images.unsplash.com/photo-1502005229762-ee1b2da92445?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama PIK 2 Waterfront Loft (Minimalis Kontemporer) dengan pencahayaan dramatis."
      },
      {
        "id": "img-27-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-27-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-27-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-27-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-28",
    "code": "SP-128",
    "title": "The Terracotta Garden Villa",
    "slug": "the-terracotta-garden-villa",
    "category": "Villa",
    "style": "Mediterania",
    "location": "Tabanan, Bali",
    "year": 2024,
    "floors": 2,
    "buildingArea": 520,
    "landArea": 880,
    "bedrooms": 4,
    "bathrooms": 5,
    "garages": 2,
    "thumbnail": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "description": "Villa asri berlantai terakota alami dengan taman tropis berlimpah tanaman palem dan kaktus eksotis.",
    "concept": "Estetika hangat bumi (earthy tone) yang membawa ketenangan alami bagi penghuninya.",
    "isFeatured": false,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-28-1",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama The Terracotta Garden Villa (Mediterania) dengan pencahayaan dramatis."
      },
      {
        "id": "img-28-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-28-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-28-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-28-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-29",
    "code": "SP-129",
    "title": "Medan Royal Pavilion",
    "slug": "medan-royal-pavilion",
    "category": "Rumah Tinggal",
    "style": "Klasik Mewah",
    "location": "Medan Baru, Medan",
    "year": 2024,
    "floors": 3,
    "buildingArea": 760,
    "landArea": 950,
    "bedrooms": 5,
    "bathrooms": 6,
    "garages": 4,
    "thumbnail": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    "description": "Rumah tinggal prestisius bergaya arsitektur klasik modern dengan pilar megah dan material marmer slab utuh.",
    "concept": "Simbol status dan prestise keluarga yang dirancang fungsional untuk kehidupan multi-generasi.",
    "isFeatured": false,
    "constructionStatus": "Tahap Konstruksi",
    "status": "Published",
    "images": [
      {
        "id": "img-29-1",
        "url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Medan Royal Pavilion (Klasik Mewah) dengan pencahayaan dramatis."
      },
      {
        "id": "img-29-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-29-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-29-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-29-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  },
  {
    "id": "proj-30",
    "code": "SP-130",
    "title": "Kelapa Gading Signature Villa",
    "slug": "kelapa-gading-signature-villa",
    "category": "Rumah Tinggal",
    "style": "Modern Tropis",
    "location": "Kelapa Gading, Jakarta Utara",
    "year": 2025,
    "floors": 3,
    "buildingArea": 650,
    "landArea": 720,
    "bedrooms": 5,
    "bathrooms": 6,
    "garages": 3,
    "thumbnail": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "description": "Rumah modern 3 lantai dengan lift pribadi, rooftop swimming pool, dan sistem fasad insulasi termal canggih.",
    "concept": "Memaksimalkan kenyamanan di lahan perkotaan padat dengan menempatkan area rekreasi dan kolam renang di lantai teratas.",
    "isFeatured": true,
    "constructionStatus": "Selesai Dibangun",
    "status": "Published",
    "panorama360": [
      {
        "id": "pano-1-1",
        "url": "https://pannellum.org/images/alma.jpg",
        "title": "Living Room & Poolside Foyer",
        "roomName": "Area Ruang Tamu & Teras Kolam"
      },
      {
        "id": "pano-1-2",
        "url": "https://pannellum.org/images/bma-0.jpg",
        "title": "Main Foyer & Interior Hall",
        "roomName": "Grand Foyer Mewah"
      }
    ],
    "images": [
      {
        "id": "img-30-1",
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "title": "Fasad Arsitektur Utama",
        "category": "eksterior",
        "caption": "Tampilan fasad utama Kelapa Gading Signature Villa (Modern Tropis) dengan pencahayaan dramatis."
      },
      {
        "id": "img-30-2",
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "title": "Area Terbuka & Kolam Renang",
        "category": "eksterior",
        "caption": "Bukaan ruang terbuka menyatu harmonis dengan elemen air dan lanskap hijau."
      },
      {
        "id": "img-30-3",
        "url": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "title": "Ruang Tamu & Living Area",
        "category": "interior",
        "caption": "Interior mewah dengan pencahayaan alami berlimpah dan furnitur custom."
      },
      {
        "id": "img-30-4",
        "url": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "title": "Kamar Tidur Utama (Master Suite)",
        "category": "interior",
        "caption": "Kenyamanan privat dengan visual langsung ke lanskap luar ruangan."
      },
      {
        "id": "img-30-5",
        "url": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
        "title": "Denah Layout Tata Ruang 2D",
        "category": "denah",
        "caption": "Denah arsitektural detail memperlihatkan alur sirkulasi dan zonasi ruangan yang efisien."
      }
    ]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'jasa-desain-arsitektur',
    title: 'Jasa Desain Arsitektur',
    shortDesc: 'Perancangan fasad dan struktur hunian mewah serta bangunan komersial berkonsep personal dan berkelas.',
    description: 'Kami memberikan layanan perancangan arsitektur komprehensif mulai dari perencanaan konsep denah ruang, eksplorasi fasad 3D, hingga gambar kerja teknis mendalam yang siap dieksekusi kontraktor.',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    features: [
      'Konseptual Denah 2D & 3D Interaktif',
      'Desain Fasad 3D Photorealistic Resolusi Tinggi',
      'Gambar Kerja Teknis Arsitektur & Struktur Lengkap',
      'Rencana Anggaran Biaya (RAB) Estimasi Terukur'
    ]
  },
  {
    id: 'srv-2',
    slug: 'desain-interior-fitout',
    title: 'Desain Interior & Fit-Out',
    shortDesc: 'Tata ruang interior bernilai estetika tinggi, ergonomis, dan merefleksikan karakter prestisius pemilik.',
    description: 'Transformasi ruang dalam menjadi lingkungan hunian atau ruang kerja yang memukau. Pemilihan material, pemilihan skema warna, pencahayaan arsitektural, hingga furnitur kustom presisi tinggi.',
    iconName: 'LayoutGrid',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    features: [
      'Moodboard Material & Color Scheme',
      'Desain Kustom Built-in Furniture & Kitchen Set',
      'Desain Tata Pencahayaan (Lighting Architecture)',
      'Spesifikasi Material & Detail Furnishing'
    ]
  },
  {
    id: 'srv-3',
    slug: 'visualisasi-3d-animasi',
    title: 'Visualisasi 3D & Video Animasi',
    shortDesc: 'Simulasi visualisasi fotorealistis dan video animasi arsitektur sebelum proyek mulai dibangun.',
    description: 'Membantu Anda merasakan atmosfer nyata hunian sebelum proses konstruksi berjalan dengan rendering pencahayaan natural dan tur video sinematik.',
    iconName: 'Eye',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    features: [
      'Render 3D Ultra HD (Daylight & Night Mode)',
      'Video Walkthrough Animasi 3D Sinematik',
      'Visualisasi Lanskap & Detail Material Akurat',
      'Persiapan Pemasaran Properti Komersial'
    ]
  },
  {
    id: 'srv-4',
    slug: 'perencanaan-renovasi',
    title: 'Perencanaan & Renovasi Bangunan',
    shortDesc: 'Modernisasi bangunan lama menjadi mahakarya kontemporer dengan efisiensi struktur optimal.',
    description: 'Menganalisis potensi struktur bangunan eksisting untuk diperbarui secara estetika maupun fungsionalitas ruang tanpa harus merobohkan keseluruhan bangunan.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Audit Kondisi Fungsional Bangunan Eksisting',
      'Redesain Fasad & Penambahan Lantai Baru',
      'Optimasi Tata Ruang Lebih Sehat & Terang',
      'Konsultasi Efisiensi Biaya Konstruksi'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    customerName: 'Ir. Hendra Wijaya',
    customerRole: 'Pemilik Villa Lumina - Bali',
    customerPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'Grand Villa Lumina Canggu',
    rating: 5,
    content: 'Kerja sama yang sangat memuaskan. Desain villa kami di Canggu tidak hanya indah di gambar 3D, namun saat dibangun semua proporsi ruang dan pencahayaan alaminya persis seperti yang dijanjikan. Komunikasi tim arsitek sangat profesional.'
  },
  {
    id: 'testi-2',
    customerName: 'Dra. Sylvia Margaretha',
    customerRole: 'Pemilik Mansion Pondok Indah',
    customerPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'The Royal Sovereign Mansion',
    rating: 5,
    content: 'Mengubah impian rumah bergaya klasik Eropa kami menjadi kenyataan yang anggun dan tidak terkesan kaku. Detail gambar kerja mereka sangat rapi sehingga kontraktor di lapangan bisa bekerja tanpa kendala revisi.'
  },
  {
    id: 'testi-3',
    customerName: 'Bramantyo Kusuma',
    customerRole: 'Founder Ironwood Creative',
    customerPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    projectTitle: 'The Ironwood Loft & Office Dago',
    rating: 5,
    content: 'Konsep industrial modern untuk studio kami di Dago mendapatkan banyak pujian dari klien kami. Perpaduan material baja, bata, dan ventilasi udaranya luar biasa sejuk. Sangat direkomendasikan!'
  }
];

export const INITIAL_CONSULTATIONS: ConsultationRequest[] = [
  {
    id: 'cons-1',
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    phone: '081234567890',
    service: 'Jasa Desain Arsitektur',
    location: 'Menteng, Jakarta Pusat',
    estimatedArea: '500 - 800 m2',
    message: 'Saya berencana membangun rumah tinggal 2 lantai dengan gaya Modern Tropis di lahan 600m2. Mohon jadwal konsultasi awal via Zoom atau tatap muka.',
    status: 'New',
    createdAt: '2026-11-08 10:15'
  },
  {
    id: 'cons-2',
    name: 'Dewi Lestari',
    email: 'dewi.lestari@example.com',
    phone: '085678901234',
    service: 'Desain Interior & Fit-Out',
    location: 'Surabaya Barat',
    estimatedArea: '300 - 500 m2',
    message: 'Ingin merenovasi interior rumah baru di Citraland Surabaya untuk master bedroom dan living room bernuansa Japandi / Modern Zen.',
    status: 'In Progress',
    createdAt: '2026-11-07 14:30'
  }
];

export const CATEGORIES_LIST = [
  'Semua Kategori',
  'Rumah Tinggal',
  'Villa',
  'Komersial & Kantor',
  'Desain Interior'
];

export const STYLES_LIST = [
  'Semua Gaya',
  'Modern Tropis',
  'Klasik Mewah',
  'Mediterania',
  'Industrial Modern',
  'Minimalis Kontemporer'
];

export const FLOORS_LIST = [
  'Semua Lantai',
  '1 Lantai',
  '2 Lantai',
  '3 Lantai',
  '4+ Lantai'
];

export const AREA_RANGES = [
  'Semua Luas',
  '< 300 m²',
  '300 - 600 m²',
  '> 600 m²'
];

export const STATUS_LIST = [
  'Semua Status',
  'Selesai Dibangun',
  'Tahap Konstruksi',
  'Desain Konsep'
];

export const YEARS_LIST = [
  'Semua Tahun',
  '2025',
  '2024',
  '2023',
  '2022'
];

export const LOCATIONS_LIST = [
  'Semua Lokasi',
  'Bali',
  'Jakarta',
  'Surabaya',
  'Bandung',
  'Tangerang'
];

export const COMPANY_INFO = {
  name: 'SPRIO Architect & Interior',
  shortName: 'SPRIO',
  whatsapp: '6287872008510',
  phoneDisplay: '+62 878-7200-8510',
  email: 'studio@sprioarchitect.com',
  address: 'Jakarta • Bali • Surabaya',
  hours: 'Sen - Sab (08.30 - 17.30 WIB)',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = customMessage || 'Halo SPRIO Architect, saya ingin konsultasi desain arsitektur / interior hunian.';
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Desain Rumah Tinggal Efisien ≤ 100 m²',
    priceLabel: 'Mulai Rp 7.000.000',
    priceStart: 7000000,
    targetUser: 'Cocok untuk pemilik lahan 60–100 m² yang ingin membangun rumah pertama yang fungsional, rapi, dan estetis tanpa pemborosan anggaran.',
    description: 'Paket Starter ditujukan bagi Anda yang membutuhkan panduan konsep denah ruang dan visual eksterior awal. Solusi cepat dan tepat untuk mendapatkan kepastian layout ruangan yang nyaman sebelum melangkah ke pembangunan.',
    coverage: [
      'Denah lantai 2D terukur & berdimensi',
      'Gambar tampak 4 sisi (depan, samping, belakang)',
      'Desain eksterior 3D realistis (1 view utama)',
      '1 kali revisi desain konsep tata ruang',
      'Estimasi kasar biaya konstruksi (RAB kasar)',
      'Konsultasi via WhatsApp intensif bersama tim arsitek'
    ],
    deliverables: [
      {
        category: 'Dokumen Gambar Desain 2D',
        items: [
          'Denah tata ruang lantai 1 (dan mezanin bila ada) skala terukur',
          'Gambar tampak depan dengan notasi material utama',
          'Gambar tampak samping kanan & kiri',
          'Gambar tampak belakang'
        ]
      },
      {
        category: 'Visualisasi 3D Eksterior',
        items: [
          'Render foto realistis eksterior tampak depan resolusi tinggi (FHD)',
          'Simulasi pencahayaan alami & bayangan fasad'
        ]
      },
      {
        category: 'Estimasi & Konsultasi',
        items: [
          'Perhitungan kasar volume & estimasi total biaya borongan',
          '1 sesi revisi penyelarasan konsep denah',
          'Dukungan konsultasi online via WhatsApp proyek'
        ]
      }
    ],
    processSteps: [
      'Diskusi kebutuhan ruang & pengukuran lahan',
      'Pembuatan draft denah konsep tata ruang',
      'Revisi & penyesuaian denah final',
      'Render visual eksterior 3D fasad',
      'Penyerahan dokumen PDF siap cetak'
    ],
    sampleIncludes: [
      'File PDF kompilasi format A3 siap pakai',
      'Gambar 3D JPEG resolusi tinggi untuk referensi kontraktor'
    ],
    waMessage: 'Halo SPRIO Architect! Saya ingin berkonsultasi mengenai Paket Starter (Mulai Rp 7jt). Boleh saya diskusikan ukuran lahan saya?'
  },
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Desain Arsitektur Lengkap Siap Bangun ≤ 200 m²',
    priceLabel: 'Mulai Rp 15.000.000',
    priceStart: 15000000,
    targetUser: 'Pilihan ideal untuk keluarga yang ingin membangun rumah tinggal 1–2 lantai dengan berkas dokumen teknis lengkap yang siap diserahkan ke tukang atau kontraktor.',
    description: 'Paket Basic memberikan solusi menyeluruh untuk gambar kerja konstruksi. Mulai dari izin PBG/IMB, gambar struktur pondasi, hingga instalasi listrik dan sanitasi air sehingga pelaksanaan proyek di lapangan tidak salah bangun.',
    coverage: [
      'Denah lantai 2D & 3D lengkap terinci',
      'Tampak arsitektur 4 sisi proporsional',
      'Desain eksterior 3D 4K (2 view berbeda)',
      'Gambar potongan bangunan melintang & membujur',
      'Detail konstruksi dasar siap izin PBG/IMB',
      'Gambar kerja struktur (pondasi, sloof, kolom, balok)',
      'Gambar instalasi MEP (listrik, saklar, air bersih, air kotor)',
      '2 kali revisi desain konsep',
      'Estimasi biaya & volume material'
    ],
    deliverables: [
      {
        category: 'Gambar Arsitektur Lengkap',
        items: [
          'Denah tata ruang lantai 1 & lantai 2 detail',
          'Denah rencana pola lantai & jenis keramik/granit',
          'Denah rencana plafon & titik lampu',
          'Denah rencana kusen, pintu, dan jendela dengan tabel dimensi',
          'Gambar 4 tampak fasad bangunan',
          'Gambar potongan bangunan A-A & B-B (irisan vertikal)'
        ]
      },
      {
        category: 'Gambar Struktur & Konstruksi',
        items: [
          'Rencana titik pondasi (footplate/batu kali/strauss pile)',
          'Rencana sloof, kolom praktis, dan kolom utama',
          'Rencana balok dan pelat lantai beton',
          'Detail pembesian dan penulangan beton bertulang',
          'Rencana rangka atap (baja ringan / kayu)'
        ]
      },
      {
        category: 'Gambar MEP (Mekanikal, Elektrikal, Plumbing)',
        items: [
          'Denah instalasi titik lampu, saklar, dan stop kontak',
          'Denah jalur pipa air bersih, toren, dan pompa',
          'Denah jalur pembuangan air kotor, air bekas, dan septic tank',
          'Denah saluran pembuangan air hujan dan resapan'
        ]
      },
      {
        category: 'Visual 3D & Administrasi',
        items: [
          '2 View render eksterior 3D kualitas 4K',
          'Dokumen teknis siap diajukan untuk perizinan PBG/IMB'
        ]
      }
    ],
    processSteps: [
      'Pengumpulan data lahan & preferensi gaya arsitektur',
      'Penyusunan konsep denah ruang & sirkulasi udara',
      'Presentasi visual eksterior 3D fasad',
      'Penyusunan gambar kerja teknis (Arsitektur, Struktur, MEP)',
      'Pengecekan akhir & penyerahan berkas dokumen lengkap'
    ],
    sampleIncludes: [
      'Jilid dokumen Gambar Kerja Konstruksi format A3',
      'File digital PDF & DWG (AutoCAD) untuk tim pelaksana',
      'File gambar 3D render 4K'
    ],
    waMessage: 'Halo SPRIO Architect! Saya tertarik dengan Paket Basic (Mulai Rp 15jt). Boleh saya mendapat informasi jadwal konsultasi?'
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Arsitektur + Interior 3D Mewah ≤ 300 m²',
    priceLabel: 'Mulai Rp 30.000.000',
    priceStart: 30000000,
    highlight: true,
    badge: 'Paling Populer',
    targetUser: 'Paling diminati! Sangat direkomendasikan bagi pemilik rumah mewah, villa modern, atau renovasi total yang mendambakan keselarasan antara fasad luar dan kenyamanan interior dalam.',
    description: 'Paket Standard menggabungkan kekuatan perancangan arsitektur eksterior kokoh dengan kemewahan desain interior 3D. Anda mendapatkan visualisasi nyata sebelum rumah dibangun, dilengkapi Rencana Anggaran Biaya (RAB) akurat untuk lelang kontraktor.',
    coverage: [
      'Desain arsitektur lengkap (denah, tampak, potongan teknis)',
      'Desain interior 3D realistis untuk 3 ruangan utama',
      'Material board & rekomendasi moodboard warna/tekstur',
      'Desain eksterior 3D kualitas tinggi (3–5 sudut pandang)',
      'Video animasi 3D walkthrough sederhana',
      'Gambar kerja konstruksi detail arsitektur, struktur, dan MEP',
      'Rencana Anggaran Biaya (RAB) terinci untuk panduan kontraktor',
      '3 kali revisi desain fleksibel'
    ],
    deliverables: [
      {
        category: 'Dokumen Arsitektur & Struktur Siap Bangun',
        items: [
          'Gambar kerja arsitektur lengkap dan detail arsitektural',
          'Gambar perhitungan dan detail pembesian struktur beton/baja',
          'Gambar instalasi MEP (listrik, plumbing, instalasi AC, pipa)',
          'Detail tangga, railing, pagar, dan kanopi'
        ]
      },
      {
        category: 'Desain Interior 3D (3 Ruangan Utama)',
        items: [
          'Desain 3D Living Room / Ruang Keluarga mewah',
          'Desain 3D Master Bedroom (Kamar Tidur Utama)',
          'Desain 3D Kitchen & Dining Area (Dapur Bersih & Ruang Makan)',
          'Rekomendasi spesifikasi material finishing dinding, lantai, dan pencahayaan'
        ]
      },
      {
        category: 'Media Visual & Presentasi',
        items: [
          '3–5 View render eksterior sinematik (siang & senja/malam)',
          'Video animasi walkthrough 3D resolusi tinggi',
          'Moodboard palet material arsitektural'
        ]
      },
      {
        category: 'Rencana Anggaran Biaya (RAB)',
        items: [
          'Perhitungan volume pekerjaan lengkap per tahapan',
          'Analisis harga satuan bahan dan upah kerja lokal',
          'RAB sebagai acuan tender / lelang kontraktor terpercaya'
        ]
      }
    ],
    processSteps: [
      'Sesi interview mendalam mengenai gaya hidup & kebutuhan ruang',
      'Pengembangan konsep denah 2D & zoning tata ruang',
      'Eksplorasi fasad 3D eksterior & pemilihan material',
      'Pengembangan desain interior 3D untuk 3 ruangan utama',
      'Penyusunan gambar kerja konstruksi detail & RAB lengkap',
      'Finalisasi video animasi & penyerahan paket dokumen'
    ],
    sampleIncludes: [
      'Buku Cetak Eksklusif Gambar Kerja & RAB format A3',
      'Flashdisk berisi file master (PDF, CAD DWG, Excel RAB, Video MP4, Gambar 4K)',
      'Sertifikat keaslian desain SPRIO Architect'
    ],
    waMessage: 'Halo SPRIO Architect! Saya sangat tertarik dengan Paket Standard (Arsitektur + Interior). Boleh saya jadwalkan sesi konsultasi desain hunian saya?'
  },
  {
    id: 'premium',
    name: 'Premium Luxury',
    tagline: 'Full Desain + Pengawasan Berkala Proyek Mewah & Villa',
    priceLabel: 'Harga Sesuai Proyek',
    badge: 'Eksklusif',
    targetUser: 'Dikhususkan untuk pembangunan hunian prestisius, mansion, villa resort, atau bangunan berstandar bintang lima dengan kustomisasi material tingkat tinggi.',
    description: 'Layanan VIP dari SPRIO Architect. Seluruh proses perancangan ditangani langsung oleh arsitek prinsipal kami, mencakup seluruh ruangan tanpa batasan luas, video sinematik 3D, hingga pendampingan dan kunjungan supervisi berkala langsung ke lokasi proyek.',
    coverage: [
      'Desain arsitektur lengkap tanpa batasan luas bangunan',
      'Desain interior 3D untuk seluruh ruangan tanpa terkecuali',
      'Material board fisik & shopping list furnitur/sanitair lengkap',
      'Render eksterior 3D sinematik tanpa batasan sudut pandang',
      'Video animasi 3D walkthrough resolusi 4K dengan narasi',
      'Gambar kerja konstruksi detail terlengkap (Arsitektur, Struktur, MEP)',
      'RAB detail akurat untuk audit biaya dan lelang kontraktor',
      'Kunjungan & pengawasan berkala langsung ke lokasi pembangunan',
      'Revisi fleksibel selama masa perancangan'
    ],
    deliverables: [
      {
        category: 'Arsitektur & Rekayasa Struktur Lengkap',
        items: [
          'Gambar kerja arsitektur komprehensif skala detail 1:20 dan 1:10',
          'Desain struktur tahan gempa berstandar SNI',
          'Perencanaan lansekap taman, kolam renang infinity, & pencahayaan taman',
          'Sistem smart home automation & instalasi solar panel (opsional)'
        ]
      },
      {
        category: 'Full Interior Desain (Seluruh Ruangan)',
        items: [
          '3D interior render untuk seluruh kamar, ruang publik, service area, hingga kamar mandi',
          'Detail gambar kerja custom furniture (wardrobe, kitchen island, credenza)',
          'Shopping list spesifikasi merk marmer, sanitary, lampu, dan wallpaper'
        ]
      },
      {
        category: 'Pengawasan Lapangan & Supervisi Berkala',
        items: [
          'Kunjungan fisik berkala arsitek ke lokasi pembangunan',
          'Quality control kesesuaian eksekusi kontraktor dengan gambar kerja',
          'Koordinasi teknis lapangan bila ditemukan kendala kontur/kondisi tanah'
        ]
      },
      {
        category: 'Dokumentasi Finansial & Media VIP',
        items: [
          'RAB master terinci dan Bill of Quantities (BoQ) lelang',
          'Video animasi sinematik arsitektur 4K',
          'Model 360° Virtual Tour Panorama interaktif'
        ]
      }
    ],
    processSteps: [
      'Site visit langsung oleh Principal Architect ke lokasi tanah',
      'Penyusunan konsep masterplan arsitektur & lansekap',
      'Pengembangan fasad luxury 3D & pemilihan material eksklusif',
      'Penyusunan desain interior 3D menyeluruh semua ruangan',
      'Pembuatan gambar kerja konstruksi ultra-detail & RAB lelang',
      'Pendampingan seleksi kontraktor & supervisi berkala saat konstruksi'
    ],
    sampleIncludes: [
      'Hardcover Book Presentation & Gambar Kerja A3 Full Color',
      'Material Sample Box fisik (sampel marmer, kayu, profil logam)',
      'Media kit lengkap file digital 4K & dokumen tender'
    ],
    waMessage: 'Halo SPRIO Architect! Saya memiliki proyek hunian/villa skala besar dan tertarik dengan Paket Premium Luxury. Kapan saya dapat berdiskusi dengan Principal Architect?'
  },
  {
    id: 'interior-only',
    name: 'Interior Only',
    tagline: 'Desain Interior & Penataan Ruang Elegan Per Ruangan',
    priceLabel: 'Mulai Rp 5.000.000 / ruang',
    priceStart: 5000000,
    targetUser: 'Bagi Anda yang sudah memiliki bangunan atau baru serah terima unit rumah/apartemen dan ingin menata interior agar terasa mewah, rapi, dan ergonomis.',
    description: 'Layanan spesialis interior untuk menciptakan ambiance ruangan yang berkelas dan fungsional. Kami merancang tata letak furnitur, skema warna, pencahayaan dramatis, hingga gambar teknis tukang mebel (custom joinery).',
    coverage: [
      'Konsultasi kebutuhan, preferensi gaya & fungsi ruang',
      'Desain tata letak furnitur 2D & 3D (space planning)',
      'Render foto-realistik 3D per ruangan (multi-view)',
      'Rekomendasi material dinding, lantai & pencahayaan (lighting concept)',
      'Detail gambar kerja joinery custom (built-in furniture & lemari)',
      'Bill of Quantity (BoQ) interior & shopping list'
    ],
    deliverables: [
      {
        category: 'Layout & Space Planning',
        items: [
          'Denah eksisting & denah usulan tata letak furnitur baru',
          'Analisis alur sirkulasi dan ergonomi aktivitas penghuni',
          'Rencana titik lampu & saklar pendukung suasana interior'
        ]
      },
      {
        category: 'Visualisasi 3D Interior Realistis',
        items: [
          'Render foto 3D resolusi tinggi dari berbagai sudut ruangan',
          'Simulasi mood pencahayaan siang (daylight) dan malam (warm light)'
        ]
      },
      {
        category: 'Gambar Kerja Mebel Custom (Joinery Detail)',
        items: [
          'Gambar potongan dan detail rak TV, kitchen set, lemari pakaian, dan backdrop dinding',
          'Spesifikasi bahan dasar (plywood, multipleks, HPL, duco, marmer)',
          'Shopping list perabot loose furniture & dekorasi'
        ]
      }
    ],
    processSteps: [
      'Pengukuran ruangan fisik & diskusi konsep preferensi',
      'Penyusunan denah tata letak furnitur 2D',
      'Render visualisasi 3D suasana ruangan',
      'Penyusunan gambar detail kerja tukang mebel',
      'Rekomendasi belanja material & lampu'
    ],
    sampleIncludes: [
      'Buku Panduan Interior & Gambar Kerja Mebel Format A3',
      'Shopping list perlengkapan interior dan kode warna cat dinding'
    ],
    waMessage: 'Halo SPRIO Architect! Saya ingin merenovasi interior ruangan saya (Paket Interior Only). Boleh saya konsultasikan ukuran ruangannya?'
  },
  {
    id: 'konsultasi',
    name: 'Konsultasi Arsitek',
    tagline: 'Arahan & Solusi Desain dari Arsitek Senior Berpengalaman',
    priceLabel: 'Mulai Rp 500.000 / sesi',
    priceStart: 500000,
    targetUser: 'Bagi pemilik lahan yang masih bingung menentukan konsep hunian, ingin mengecek kelayakan regulasi lahan (KDB/KLB), atau ingin berkonsultasi sebelum membeli tanah.',
    description: 'Sesi one-on-one intensif bersama arsitek senior kami untuk membedah potensi lahan Anda, memberikan sketsa zoning kasar, solusi pencahayaan/penghawaan, serta gambaran realistis estimasi biaya bangun.',
    coverage: [
      'Sesi tatap muka atau video conference interaktif (1–2 jam)',
      'Analisis potensi lahan, orientasi matahari & regulasi tata kota',
      'Rekomendasi konsep desain awal & gaya arsitektur yang cocok',
      'Estimasi kasar biaya konstruksi yang realistis dan terukur',
      'Saran pemilihan material efisien & tahan lama untuk iklim tropis',
      'Catatan hasil konsultasi tertulis & sketsa konsep (Summary Report)'
    ],
    deliverables: [
      {
        category: 'Sesi Interaktif Bersama Arsitek',
        items: [
          'Sesi konsultasi langsung via Google Meet / Zoom atau tatap muka di studio',
          'Diskusi bebas mengenai kebutuhan keluarga, gaya hidup, dan budget plafon'
        ]
      },
      {
        category: 'Analisis Teknis Lahan',
        items: [
          'Analisis orientasi sinar matahari timur-barat untuk kenyamanan termal',
          'Analisis arah angin dan bukaan sirkulasi udara alami',
          'Pemeriksaan garis sempadan bangunan (GSB) dan koefisien dasar bangunan (KDB)'
        ]
      },
      {
        category: 'Laporan Rekomendasi Tertulis',
        items: [
          'Dokumen tertulis rangkuman sesi konsultasi',
          'Sketsa konsep kasar zonasi ruangan',
          'Panduan tahapan langkah pembangunan hunian yang aman dan efisien'
        ]
      }
    ],
    processSteps: [
      'Booking jadwal & pengiriman data lahan via WhatsApp',
      'Pelaksanaan sesi konsultasi interaktif 1–2 jam',
      'Pengiriman catatan rangkuman & rekomendasi tertulis arsitek'
    ],
    sampleIncludes: [
      'Dokumen PDF Consultation Summary Report'
    ],
    waMessage: 'Halo SPRIO Architect! Saya ingin menjadwalkan sesi Konsultasi Desain (Rp 500rb/sesi). Kapan jadwal ketersediaan arsitek terdekat?'
  }
];


