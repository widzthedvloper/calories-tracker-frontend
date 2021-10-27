import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus,
  faChartLine,
  faTasks,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

function FooterComponent() {
  return (
    <div className="footer-nav">
      <div className="nav-item">
        <NavLink className="footer-item" activeClassName="is-active" to="/new/food" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faPlus} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            Add Food
          </span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
          <span style={{display: 'flex', justifyContent: 'center'}}>
          <FontAwesomeIcon icon={faChartLine} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            Dash
          </span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faTasks} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            Ingredient
          </span>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
          <span style={{display: 'flex', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faEllipsisH} style={{ display: 'block'}} />
          </span>
          <span style={{display: 'flex', justifyContent: 'center'}}>
            More
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default FooterComponent;
