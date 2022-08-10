import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <img src='https://careerindex.co.in/assets/images/emptycart.png' alt='' />
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Order Now
      </button>
    </div>
  );
};

export default EmptyCart;