import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({ greeting, paragraph, button }) => (
  <div className="Jumbotron">
    <h1 className="display-4">{greeting}</h1>
    <p className="lead">{paragraph}</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">
        {button}
      </a>
    </p>
  </div>
);

Jumbotron.propTypes = {
 greeting: PropTypes.string,
  paragraph: PropTypes.string,
  button: PropTypes.string,
};

export default Jumbotron;
