import { AuthUser } from '../types/auth';

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const getUserRole = (user: AuthUser | null): 'admin' | 'customer' | 'delivery' | null => {
  return user?.role || null;
};