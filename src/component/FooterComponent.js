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
        <FontAwesomeIcon icon={faPlus} style={{ marginLeft: '50%', marginTop: '15%'}}/>
        <NavLink className="footer-item" activeClassName="is-active" to="/new/food" style={{marginLeft: '25%'}}>
          Add Food
        </NavLink>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faChartLine} style={{ marginLeft: '50%', marginTop: '15%'}}/>
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{marginLeft: '25%'}} >Dash</NavLink>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faTasks} style={{ marginLeft: '50%', marginTop: '15%'}}/>
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{marginLeft: '-6%'}} >Ingredient</NavLink>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faEllipsisH} style={{ marginLeft: '50%', marginTop: '15%'}}/>
        <NavLink className="footer-text" activeClassName="is-active" to="/App" style={{marginLeft: '25%'}} >More</NavLink>
      </div>
    </div>
  );
}

export default FooterComponent;
