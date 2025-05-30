export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  type: 'brochure' | 'image' | 'pdf';
  url: string;
  name: string;
  size?: number;
}

export interface CourseInfo {
  id: string;
  title: string;
  duration: string;
  price: number;
  location: string;
  brochureUrl: string;
}

export const COURSES: CourseInfo[] = [
  {
    id: '100hr',
    title: '100-Hour Foundation Course',
    duration: '12 days',
    price: 899,
    location: 'Rishikesh, India',
    brochureUrl: '/brochures/100hr-ytt.pdf'
  },
  {
    id: '200hr',
    title: '200-Hour Yoga Teacher Training',
    duration: '28 days',
    price: 1499,
    location: 'Rishikesh, India',
    brochureUrl: '/brochures/200hr-ytt.pdf'
  },
  {
    id: '300hr',
    title: '300-Hour Advanced YTT',
    duration: '30 days',
    price: 2199,
    location: 'Rishikesh, India',
    brochureUrl: '/brochures/300hr-ytt.pdf'
  },
  {
    id: '500hr',
    title: '500-Hour Professional YTT',
    duration: '58 days',
    price: 3499,
    location: 'Rishikesh, India',
    brochureUrl: '/brochures/500hr-ytt.pdf'
  }
]; 