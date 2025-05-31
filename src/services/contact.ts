import { api } from '@/utils/api';
import type {
  ApiResponse,
  ContactFormRequest,
  ContactFormResponse,
  CourseEnquiryRequest,
  CourseEnquiryResponse,
  Contact,
} from '@/types/api';

export const contactService = {
  submitContactForm: async (data: ContactFormRequest) => {
    return api.post<ApiResponse<ContactFormResponse>>(
      'contact',
      data
    );
  },

  submitCourseEnquiry: async (data: CourseEnquiryRequest) => {
    return api.post<ApiResponse<CourseEnquiryResponse>>(
      'courses/enquiry',
      data
    );
  },

  getAllContacts: async () => {
    return api.get<Contact[]>('contact');
  },
}; 