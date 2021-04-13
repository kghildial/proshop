import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ productID, value, text, color }) => {
  // A placeholder loop for the star's values
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {starsArray.map((starVal) => (
        <span key={`product_${productID}_star_${starVal}`}>
          <i
            style={{ color }}
            className={
              value >= starVal
                ? 'fas fa-star'
                : value >= starVal - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
      ))}
      <span className="review-count">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
