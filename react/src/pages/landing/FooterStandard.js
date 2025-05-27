import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'helpers/createMarkup';
import Section from 'components/common/Section';
import IconGroup from 'components/common/icon/IconGroup';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blogPostList, menuList1, menuList2 } from 'data/footer';
import { bgWhiteIcons } from 'data/socialIcons';
import { version } from 'config';
import {
  faEnvelope,
  faMailBulk,
  faPaperclip,
  faPhone,
  faShippingFast,
  faSquarePhone
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const FooterTitle = ({ children }) => (
  <h5 className="text-uppercase text-white opacity-85 mb-3">{children}</h5>
);

FooterTitle.propTypes = { children: PropTypes.node.isRequired };

const FooterList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map(({ title, to }, index) => (
      <li className="mb-1" key={index}>
        <Link className="text-600" to={to}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

FooterList.propTypes = { list: PropTypes.array.isRequired };

const FooterBlogList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map((blog, index) => (
      <li key={index}>
        <h5 className="fs-0 mb-0">
          <Link className="text-600" to="#!">
            {blog.title}
          </Link>
        </h5>
        <p className="text-600 opacity-50">
          {blog.date} &bull; {blog.read} read{' '}
          {blog.star && (
            <span dangerouslySetInnerHTML={createMarkup('&starf;')} />
          )}
        </p>
      </li>
    ))}
  </ul>
);

FooterBlogList.propTypes = { list: PropTypes.array.isRequired };

const FooterStandard2 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Section bg="dark" className="pt-8 pb-4 light">
        <div
          className="position-absolute btn-back-to-top cursor-pointer bg-dark"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon="chevron-up"
            transform="rotate-45"
            className="text-600"
          />
        </div>
        <Row>
          <Col lg={4}>
            <FooterTitle>Uno</FooterTitle>
            <IconGroup className="mt-4" icons={bgWhiteIcons} />
          </Col>
          <Col className="ps-lg-6 ps-xl-8">
            <Row className="mt-5 mt-lg-0">
              <Col className="mt-5 mt-md-0">
                <FooterTitle><FontAwesomeIcon icon={faSquarePhone} /> Service Client</FooterTitle>
                (+216) 42 639 582
              </Col>
              <Col className="mt-5 mt-md-0">
                <FooterTitle><FontAwesomeIcon icon={faShippingFast} /> Livraison rapide</FooterTitle>
                (+216) 42 639 582
              </Col>
              <Col className="mt-5 mt-md-0">
                <FooterTitle><FontAwesomeIcon icon={faPaperclip} /> Livraison rapide</FooterTitle>
                info@uno.tn
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    </>
  );
};
export const FooterStandard = () => {
  return(
      <div className="bg-primary AllInfo ">
          <div className="Icons">
              <a href="https://www.facebook.com/share/1ExXshoBn5/?mibextid=wwXIfr" className="theSvg">
                  <FontAwesomeIcon icon={faFacebook} className={"text-white"} />
              </a>
              <a href="https://www.instagram.com/uno.marketofficiel?igsh=MWZkNG83eXBkeno5Nw==" className="theSvg">
              <FontAwesomeIcon icon={faInstagram} className={"text-white"} />
                  </a>
              <a href="" className="theSvg">
              <FontAwesomeIcon icon={faWhatsapp} className={"text-white"} />
                  </a>
              

          </div>
          <div className="Contact">
              <div className="ee">
                  <div className="thesvg">
                  <FontAwesomeIcon icon={faPhone} className={"text-white"} />
                  </div>
                  <div className="teliphon">
                     <span>Tel:</span>  +216 55 607 300
                  </div>
              </div>
              <div className="ee">
              <div className="thesvg">
              <FontAwesomeIcon icon={faEnvelope} className={"text-white"} />
              </div>
              <div className="teliphon">
                  <span>Email:</span>  Unomarket@gmail.com
              </div>
              </div>
          </div>
      </div>
  )
}
export default FooterStandard;
