import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../action';
import '../style/signin.css';

const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  let errorElement = '';

  const grabEmail = (emailInput) => {
    setEmail(emailInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkUser({ email }));
  };

  const id = useSelector(state => state.user.id);
  const error = useSelector(state => state.user.error);
  
  if (error != null) {
    errorElement = (<div><p style={{color: 'red', margin: '5px 5px 5px 0'}}>{error}</p></div>)
  }

  if(id != null){
    history.push('/App');
  }

  return (
    <div className="form-confirmation">
      <form onSubmit={handleSubmit}>
        { errorElement }
        <label htmlFor="email">
          Email
          <br />
          <input onChange={(e) => grabEmail(e.target.value)} id="email" type="email" value={email} placeholder="user@email.com" />
        </label>
        <br />
        <button type="submit" className="sign-in">Sign In</button>
        <br />
        <a href="/new/user" className="sign-up">Create a new account</a>
      </form>
    </div>
  );
};

export default SignInComponent;
