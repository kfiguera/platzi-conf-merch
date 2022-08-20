import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          Platzi Conf Merch
        </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <FaShoppingBasket title='Checkout'/>
        </Link>
      </div>
    </div>
  );
};
export default Header;