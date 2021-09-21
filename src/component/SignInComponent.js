/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { useState } from 'react';
import logUser from '../API/api';

const SignInComponent = () => {
  const [btnName, setBtnName] = useState('Sign In');

  if (document.querySelector('.sign-up')) {
    document.querySelector('.sign-up').addEventListener('click', () => {
      setBtnName('Sign Up');
    });
  }

  return (
    <div className="form-confirmation">
      <form>
        <label htmlFor="email">
          Email
          <input id="email" type="email" placeholder="user@email.com" />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" type="password" placeholder="******" />
        </label>
        <label htmlFor="password-confirmation">
          Password Confirmation
          <input id="password-confirmation" type="email" placeholder="user@email.com" />
        </label>
        <button className={btnName}>{btnName}</button>
        <a href="/" className="sign-up">Create a new account</a>
        <a href="/" className="sign-in">Sign In</a>
      </form>
    </div>
  );
};

export default SignInComponent;
