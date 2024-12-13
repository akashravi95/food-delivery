import { AuthUser, LoginCredentials } from '../types/auth';

// Simulated user database
const users: AuthUser[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    email: 'customer@example.com',
    name: 'John Customer',
    role: 'customer'
  }
];

export const loginUser = async (credentials: LoginCredentials): Promise<AuthUser> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = users.find(u => u.email === credentials.email);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // In a real app, we would verify the password here
  if (credentials.password !== 'password123') {
    throw new Error('Invalid credentials');
  }

  return user;
};