import { useEffect, useState } from 'react';
import axios from 'axios';
import initialState from '../initialState';

const API = 'http://localhost:1337/api/products?populate=*';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API);
      setProducts(response.data.data);
    };

    getData();
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      order: [...state.order, payload],
    });
  };


  return { state, products, addToCart, removeFromCart, addToBuyer, addNewOrder };
};
export default useInitialState;
