/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

function SignInComponent() {
  const [btnName, setBtnName] = useState('Sign In');

  if (document.querySelector('.In')) {
    document.querySelector('.In').addEventListener('click', () => { });
  }

  if (document.querySelector('.Up')) {
    document.querySelector('.Up').addEventListener('click', () => { });
  }

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
        <button type="submit" className={btnName}>{btnName}</button>
        <a href="#" className="sign-up">Create a new account</a>
      </form>
    </div>
  );
}

export default SignInComponent;
