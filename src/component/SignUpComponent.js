import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../action';

function SignUpComponent() {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const grabEmail = (emailInput) => {
    setEmail(emailInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({
      email,
    }));
    history.push('/App');
  };

  return (
    <div className="form-confirmation">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input onChange={(e) => grabEmail(e.target.value)} id="email" type="email" value={email} placeholder="user@email.com" />
        </label>
        <br />
        <button type="submit" className="sign-in">Sign Up</button>
        <br />
        <a href="/" className="sign-up">Already have an account? Sign In!</a>
      </form>
    </div>
  );
}

export default SignUpComponent;
