/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUser } from '../action';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const grabEmail = (emailInput) => {
    setEmail(emailInput);
  };

  const grabPassword = (passwordInput) => {
    setPassword(passwordInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkUser({ email, password }));
    history.push('/App');
  };

  return (
    <div className="form-confirmation">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input onChange={(e) => grabEmail(e.target.value)} id="email" type="email" value={email} placeholder="user@email.com" />
        </label>
        <label htmlFor="password">
          Password
          <input onChange={(e) => grabPassword(e.target.value)} id="password" type="password" value={password} placeholder="******" />
        </label>
        <button type="submit" className="sign-in">Sign In</button>
        <a href="/new/user" className="sign-up">Create a new account</a>
      </form>
    </div>
  );
};

export default SignInComponent;
