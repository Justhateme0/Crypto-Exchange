export interface Order {
  id: string;
  date: string;
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  cashAmount: number;
  status: string;
  email: string;
  fullName: string;
  phone: string;
  pickupMethod: string;
  address: string;
}

export const getOrders = (): Order[] => {
  try {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error('Error reading orders from localStorage:', error);
    return [];
  }
};

export const saveOrder = (order: Omit<Order, 'id' | 'date' | 'status'>) => {
  try {
    const orders = getOrders();
    const newOrder: Order = {
      ...order,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      status: 'В обработке'
    };
    
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    return newOrder;
  } catch (error) {
    console.error('Error saving order to localStorage:', error);
    throw new Error('Failed to save order');
  }
}; 