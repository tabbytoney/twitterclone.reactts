import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
import CatSit from '../styles/images/catsit.jpeg';

export default function Landing() {
  return (
    <div className='main'>
      <div className='wrapper'>
        <div className='left'>
          <div className='items-wrapper'>
            <div className='item'>
              <span className='icon'>
                <i className='fa fa-search' aria-hidden='true'></i>
              </span>
              <span className='label'>Follow your interests.</span>
            </div>
            <div className='item'>
              <span className='icon'>
                <i className='fa fa-user' aria-hidden='true'></i>
              </span>
              <span className='label'>Hear what people are talking about.</span>
            </div>
            <div className='item'>
              <span className='icon'>
                <i className='fa fa-comment' aria-hidden='true'></i>
              </span>
              <span className='label'>Join the conversation.</span>
            </div>
          </div>
        </div>

        <div className='center'>
          <img src={CatSit} alt='logo' style={{ width: '50px' }} />
          <h1>
            See what's happening in
            <br />
            the cat world right now
          </h1>
          <span>Join Cat Twitter today.</span>
          <Link to='/signup' className='btn-sign-up'>
            Sign up
          </Link>
          <Link to='/login' className='btn-login'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
