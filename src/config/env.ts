interface EnvConfig {
  apiBaseUrl: string;
  apiVersion: string;
  isProduction: boolean;
}

const devConfig: EnvConfig = {
  apiBaseUrl: 'http://localhost:8080',
  apiVersion: 'v1',
  isProduction: false,
};

const prodConfig: EnvConfig = {
  apiBaseUrl: 'https://yoga-backend-9w5v.onrender.com/', // Replace with your actual production API domain
  apiVersion: 'v1',
  isProduction: true,
};

// export const env: EnvConfig = 
//   process.env.NEXT_PUBLIC_ENV === 'production' ? prodConfig : devConfig;

// config/env.ts or lib/api.ts

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080';
const apiVersion = 'v1';
const adminUsername = process.env.ADMIN_USERNAME!;
const adminPassword = process.env.ADMIN_PASSWORD!;


export const getApiUrl = (endpoint: string): string => {
  return `${apiBaseUrl}/api/${apiVersion}/${endpoint}`;
}; 

export const getAdminUsername = (): string => {
  return adminUsername;
};

export const getAdminPassword = (): string => {
  return adminPassword;
};