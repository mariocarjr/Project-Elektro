import React from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <p>This is the Cart page content.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Cart;
