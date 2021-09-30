import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/footer.css';

function FooterComponent() {
  return (
    <div className="footer-nav">
      <div className="nav-item">
        <NavLink className="footer-item" activeClassName="is-active" to="/new/food">
          Add Food
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App">Trac It</NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App">Your Health</NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App">More</NavLink>
      </div>
    </div>
  );
}

export default FooterComponent;
