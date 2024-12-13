export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const calculateTotal = (subtotal: number, deliveryFee: number, tip: number = 0): number => {
  return subtotal + deliveryFee + tip;
};

export const calculateTax = (amount: number, taxRate: number = 0.08): number => {
  return amount * taxRate;
};