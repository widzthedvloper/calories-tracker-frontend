import React from 'react';

function DashboardComponent() {
  return (
    <div>
      <div className="time">7 september 2013</div>
      <div className="measurement-total">
        <div className="meal-total">75</div>
        <div className="meal-ingredient">100</div>
        <div className="calorie-total">200</div>
      </div>
      <div className="measurment-panel">
        <div className="meal">
          <div className="meal-icon">
            <i className="fas fa-utensils" />
          </div>
          <div className="meal-details">
            <span>meal name</span>
            <span>meal calorie</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
