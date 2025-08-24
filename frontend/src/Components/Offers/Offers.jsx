import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

export const Offers = () => {
  const navigate = useNavigate();

  const CheckNowClick = () => {
    navigate('/hidden-gems');
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best seller products</p>
        <button onClick={CheckNowClick}>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive" />
      </div>
    </div>
  );
};
