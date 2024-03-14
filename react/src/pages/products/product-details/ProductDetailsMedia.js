import React from 'react';
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductDetailsMedia = ({product: {image}}) => {

    return (
        <Image
            fluid
            className="fit-cover rounded img-thumbnail"
            style={{maxHeight: "450px"}}
            src={image}
            alt="product media"
        />
    );
};

ProductDetailsMedia.propTypes = {
    product: PropTypes.shape({
        files: PropTypes.arrayOf(PropTypes.object),
    })
};

export default ProductDetailsMedia;
