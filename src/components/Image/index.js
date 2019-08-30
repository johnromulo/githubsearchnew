import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={e => {
        e.target.onerror = null;
        e.target.src = 'https://api.adorable.io/avatar/140/noavatar.png';
      }}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
