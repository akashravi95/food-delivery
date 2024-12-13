export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'delivery' | 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData extends LoginCredentials {
  name: string;
  role?: 'customer' | 'delivery' | 'admin';
}