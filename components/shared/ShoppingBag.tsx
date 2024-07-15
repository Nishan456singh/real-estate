import React, { useState } from 'react';

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const ShoppingBag: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const checkout = () => {
    // Here you can handle the checkout logic (e.g., navigate to a checkout page)
    console.log('Checking out', items);
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Shopping Bag</h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <hr className="my-4" />
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">Total</h2>
        <p>${total.toFixed(2)}</p>
      </div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default ShoppingBag;