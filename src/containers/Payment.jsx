import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import PaypalPay from '../components/PaypalPay';
import { handleSumTotal } from '../utils';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart } = state;
  const totalAmount = handleSumTotal(cart);

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.id}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span> {item.price}</span>
            </div>
          </div>
        ))}
        {cart.length > 0 && (
          <h3>{`Total: ${totalAmount}`}</h3>
        )}
        <div className='Payment-button'>
          <PaypalPay amount={totalAmount} />
        </div>
      </div>
      <div />
    </div>
  );
};
export default Payment;