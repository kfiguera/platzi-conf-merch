import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.title} />
      <div className='Products-item-info'>
        <h2>{product.title}</h2>
        <span>{product.price}</span>
        <p>{product.description}</p>
      </div>
      <button type='button'>Comprar</button>
    </div>
  );
};

export default Product;
