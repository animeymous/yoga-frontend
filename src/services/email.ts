// services/emailService.ts
import { api } from '@/utils/api';
import type { ApiResponse } from '@/types/api';
import { getAdminUsername, getAdminPassword } from '@/config/env';

export interface SendEmailRequest {
  email: string;
  message: string;
}

export const emailService = {
  sendEmail: async (data: SendEmailRequest) => {
    const username = getAdminUsername();
    const password = getAdminPassword();
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

    return api.post<ApiResponse<string>>('email', data, {
      headers: {
        Authorization: authHeader,
      },
    });
  },
};
