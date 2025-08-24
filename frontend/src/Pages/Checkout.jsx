import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className='checkout'>
      <h1>Checkout</h1>
      <div className='payment-method'>
        <label htmlFor='payment-method'>Select Payment Method:</label>
        <select id='payment-method' defaultValue='pay-on-delivery'>
          <option value='pay-on-delivery'>Pay on Delivery</option>
          {/* You can add more payment options here */}
        </select>
      </div>
      <div className='cart-total'>
        <h2>Cart Total: ${getTotalCartAmount()}</h2>
      </div>
    </div>
  );
};

export default Checkout;
