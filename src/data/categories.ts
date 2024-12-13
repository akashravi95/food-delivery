export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'sushi', name: 'Sushi', icon: '🍱' },
  { id: 'indian', name: 'Indian', icon: '🍛' },
  { id: 'chinese', name: 'Chinese', icon: '🥡' },
  { id: 'italian', name: 'Italian', icon: '🍝' },
  { id: 'mexican', name: 'Mexican', icon: '🌮' }
];