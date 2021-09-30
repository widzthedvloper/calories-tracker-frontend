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
        <NavLink className="footer-text" activeClassName="is-active" to="/new/food">Trac It</NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/new/food">Your Health</NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/new/food">More</NavLink>
      </div>
    </div>
  );
}

export default FooterComponent;
