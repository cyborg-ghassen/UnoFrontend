import React from 'react';
import { Badge, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import classNames from 'classnames';
import "./style.css"
import discount from "../../assets/img/discount1.2.png"

const sliderSettings = {
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ProductSingleImage = ({ id, image, name, layout }) => {
  return (
    <Link
      to={`/e-commerce/product/product-details/${id}`}
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

const ProductImage = ({ name, id, isNew, files, layout }) => {
  return (
    <div
      className={classNames('i11 mt-2  position-relative rounded-top overflow-hidden', {
        'h-sm-100': layout === 'list'
      })}
    >
      <div className='i13'>
      <Image
        rounded={layout === 'list'}
        src={discount}
        style={{
          maxHeight: "250px"
        }}
        className={classNames('h-100 w-100 fit-cover img-thumbnail', {
          'rounded-top': layout === 'grid'
        })}
        alt={name}
      />
      {/* // add here the value of the discount */}
      </div>
        <ProductSingleImage
        // className="m-auto"
          id={id}
          image={files}
          name={name}
          layout={layout}
        />
      {isNew && (
        <Badge
          pill
          bg="success"
          className="position-absolute top-0 end-0 me-2 mt-2 fs--2 z-index-2"
        >
          New
        </Badge>
      )}
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
