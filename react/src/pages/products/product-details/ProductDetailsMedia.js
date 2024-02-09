import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductDetailsMedia = ({ product: { image} }) => {

  return (
    <div className="position-relative h-sm-100 overflow-hidden">
        <Image
          fluid
          className="fit-cover w-sm-100 h-sm-100 rounded"
          src={image}
          alt="product media"
        />
    </div>
  );
};

ProductDetailsMedia.propTypes = {
  product: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.object),
  })
};

export default ProductDetailsMedia;
