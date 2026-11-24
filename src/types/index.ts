export type ProjectCategory = 'Rumah Tinggal' | 'Villa' | 'Komersial & Kantor' | 'Desain Interior';

export type ArchitecturalStyle = 
  | 'Modern Tropis' 
  | 'Klasik Mewah' 
  | 'Mediterania' 
  | 'Industrial Modern' 
  | 'Minimalis Kontemporer';

export type MediaCategory = 'eksterior' | 'interior' | 'denah';

export interface Panorama360Item {
  id: string;
  url: string;
  title: string;
  roomName?: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  title: string;
  category: MediaCategory;
  caption?: string;
}

export interface Project {
  id: string;
  code: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  style: ArchitecturalStyle;
  location: string;
  year: number;
  floors: number;
  buildingArea: number; // in m2
  landArea?: number; // in m2
  bedrooms?: number;
  bathrooms?: number;
  garages?: number;
  thumbnail: string;
  description: string;
  concept: string;
  isFeatured: boolean;
  status: 'Published' | 'Draft';
  constructionStatus?: 'Selesai Dibangun' | 'Tahap Konstruksi' | 'Desain Konsep';
  panorama360?: Panorama360Item[];
  images: ProjectImage[];
}

export interface ConsultationRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  estimatedArea?: string;
  message: string;
  status: 'New' | 'In Progress' | 'Contacted' | 'Completed' | 'Archived';
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  customerName: string;
  customerRole: string;
  customerPhoto: string;
  projectTitle: string;
  rating: number;
  content: string;
}

export interface PortfolioFilterState {
  search: string;
  category: string;
  style: string;
  status: string;
  year: string;
  floors: string;
  areaRange: string;
  location: string;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  priceLabel: string;
  priceStart?: number;
  coverage: string[];
  highlight?: boolean;
  badge?: string;
  waMessage: string;
  description?: string;
  targetUser?: string;
  deliverables?: {
    category: string;
    items: string[];
  }[];
  processSteps?: string[];
  sampleIncludes?: string[];
}


