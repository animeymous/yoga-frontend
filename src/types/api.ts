// Common API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Contact Form Types
export interface ContactFormRequest {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  courseId?: number;
}

export interface ContactFormResponse {
  id: string;
  timestamp: string;
  status: 'success' | 'error';
}

// Course Types
export interface CourseEnquiryRequest {
  courseId: number;
  name: string;
  email: string;
  phone?: string;
  startDate?: string;
  message?: string;
}

export interface CourseEnquiryResponse {
  enquiryId: string;
  estimatedResponseTime: string;
}

// Newsletter Subscription
export interface NewsletterSubscriptionRequest {
  email: string;
  preferences?: string[];
}

export interface NewsletterSubscriptionResponse {
  subscriptionId: string;
  status: 'active' | 'pending';
} 