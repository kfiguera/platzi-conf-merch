import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';

const PaypalPay = ({ amount }) => {

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOptions = {
    'client-id': process.env.PAYPAL_CLIENT_ID,
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const paymentHandleSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer: buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={buttonStyles}
        disabled={false}
        createOrder={(data, actions) =>
          actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: Number.parseFloat(amount).toFixed(2),
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            })
        }
        onApprove={(data, actions) => {
          return actions.order
            .capture()
            .then((data) => {
              // Your code here after capture the
              paymentHandleSuccess(data);
            })
            .catch((error) => console.log(error));
        }}
      />
    </PayPalScriptProvider>

  );
};

export default PaypalPay;