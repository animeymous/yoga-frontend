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

export const env: EnvConfig = 
  process.env.NEXT_PUBLIC_ENV === 'production' ? prodConfig : devConfig;

export const getApiUrl = (endpoint: string): string => {
  return `${env.apiBaseUrl}/api/${env.apiVersion}/${endpoint}`;
}; 