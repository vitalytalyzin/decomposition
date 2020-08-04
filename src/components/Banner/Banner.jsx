import React from 'react';
import PropTypes from 'prop-types';

// Компонент баннер

const Banner = ({ text }) => {
  const bannerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 100,
    margin: '0 auto',
    border: '1px solid tomato',
    backgroundColor: 'salmon'
  };

  return (
    <div style={bannerStyle}>
      {text}
    </div>
  );
};

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
