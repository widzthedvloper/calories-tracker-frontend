import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../action';

function SignUpComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const grabName = (emailInput) => {
    setName(emailInput);
  };

  const grabEmail = (emailInput) => {
    setEmail(emailInput);
  };

  const grabPassword = (passwordInput) => {
    setPassword(passwordInput);
  };

  const grabPasswordConfirmation = (passwordConfirmationInput) => {
    setPasswordConfirmation(passwordConfirmationInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({
      name, email, password, passwordConfirmation,
    }));
    history.push('/App');
  };

  return (
    <div className="form-confirmation">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input onChange={(e) => grabName(e.target.value)} id="name" type="text" value={name} />
        </label>
        <label htmlFor="email">
          Email
          <input onChange={(e) => grabEmail(e.target.value)} id="email" type="email" value={email} placeholder="user@email.com" />
        </label>
        <label htmlFor="password">
          Password
          <input onChange={(e) => grabPassword(e.target.value)} id="password" type="password" value={password} placeholder="******" />
        </label>
        <label htmlFor="password">
          Password
          <input onChange={(e) => grabPasswordConfirmation(e.target.value)} id="password" type="password" value={passwordConfirmation} placeholder="******" />
        </label>
        <button type="submit" className="sign-in">Sign Up</button>
        <a href="/" className="sign-up">Already have an account!!! Sign In</a>
      </form>
    </div>
  );
}

export default SignUpComponent;
