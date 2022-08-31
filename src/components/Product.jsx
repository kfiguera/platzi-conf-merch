import React from 'react';

const Product = ({ product, handleAddToCart }) => {

  return (
    <div className='Products-item'>
      <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt={product.attributes.title} />
      <div className='Products-item-info'>
        <h2>{product.attributes.title}</h2>
        <span>$ {product.attributes.price}</span>
        <p>{product.attributes.description}</p>
      </div>
      <button type='button' onClick={() => handleAddToCart(product)}>Comprar</button>
    </div>
  );
};

export default Product;
