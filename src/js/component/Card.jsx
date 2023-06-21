import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardTitle, cardText, cardButton }) => (
  // <div className="card-group">
  <div className="card" style={{ width: "19rem" }}>
    <img className="card-img-top" src="https://bestlifeonline.com/wp-content/uploads/sites/3/2019/12/gold.jpg?quality=82&strip=all" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{cardTitle}</h5>
      <p className="card-text">{cardText}</p>
    </div>
    <div className="card-footer">
      <div className="button">
        <a href="#" className="btn btn-primary">
          {cardButton}
        </a>
      </div>
    </div>
  </div>
);
Card.propTypes = {
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  cardButton: PropTypes.string,
};

export default Card;
