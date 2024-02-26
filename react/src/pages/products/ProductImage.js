import React from 'react';
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import "./style.css"

import StarComponent from "../../components/common/StarComponent";

const ProductSingleImage = ({id, image, name, layout}) => {
    return (
        <Link
            to={`/products/${id}`}
            className="d-block h-sm-100"
            key={image.id}
        >
            <Image
                rounded={layout === 'list'}
                src={image}
                style={{
                    maxHeight: "250px"
                }}
                className={classNames('h-100 w-100 fit-cover img-thumbnail', {
                    'rounded-top': layout === 'grid'
                })}
                alt={name}
            />

        </Link>
    );
};

const ProductImage = ({name, id, isNew = true, files, layout, promo}) => {
    return (
        <div
            className={classNames('i11 mt-2  position-relative rounded-top overflow-visible', {
                'h-sm-100': layout === 'list'
            })}
        >
            <ProductSingleImage
                // className="m-auto"
                id={id}
                image={files}
                name={name}
                layout={layout}
            />
            <StarComponent/>
        </div>
    );
};

ProductSingleImage.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        src: PropTypes.string.isRequired
    }),
    name: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired
};

ProductImage.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isNew: PropTypes.bool,
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
    layout: PropTypes.string.isRequired
};

export default ProductImage;
