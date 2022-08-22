import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import  AppContext from '../context/AppContext';
import '../styles/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          Platzi Conf Merch
        </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <FaShoppingBasket title='Checkout' />
        </Link>

        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};
export default Header;