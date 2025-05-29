export interface CourseDetail {
  id: number;
  title: string;
  subtitle: string;
  heroImage: string;
  duration: string;
  nextBatch: string;
  level: string;
  style: string;
  certification: string;
  language: string;
  location: string;
  pricing: {
    private: number;
    shared: number;
  };
  overview: string;
  highlights: string[];
  curriculum: {
    title: string;
    topics: string[];
  }[];
  schedule: {
    time: string;
    activity: string;
  }[];
  included: string[];
  prerequisites: string[];
  accommodation: {
    title: string;
    description: string;
    amenities: string[];
  };
  gallery: string[];
} 