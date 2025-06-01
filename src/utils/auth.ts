import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  role: string;
  iat: number;
  exp: number;
}

export function getUserRoleFromToken(token: string): string | null {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.role;
  } catch (e) {
    return null;
  }
}

export function getUsernameFromToken(token: string): string | null {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.sub;
  } catch (e) {
    return null;
  }
}