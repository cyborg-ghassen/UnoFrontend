import React from 'react';
import { Tab, Nav, Row, Col, Table, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StarRating from 'components/common/StarRating';
import createMarkup from 'helpers/createMarkup';

const ProductDetailsFooter = ({
  product: { description, reviews }
}) => {
  return (
    <div className="mt-4">
      <Tab.Container defaultActiveKey="description">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              eventKey="description"
              className="ps-0 cursor-pointer outline-none"
            >
              Description
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="specifications"
              className="px-2 px-md-3 cursor-pointer outline-none"
            >
              Specifications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="reviews"
              className="px-2 px-md-3 cursor-pointer outline-none"
            >
              Reviews
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <div
              className="mt-3"
              dangerouslySetInnerHTML={createMarkup(description)}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="specifications">
            <Table className="fs--1 mt-3">
              <tbody>

              </tbody>
            </Table>
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
            <Row className="mt-3">
              <Col lg={6} className="mb-4 mb-lg-0">

              </Col>
              <Col lg={6} className="ps-lg-5">
                <Form>
                  <h5 className="mb-3">Write your Review</h5>
                  <div className="mb-3">
                    <Form.Label className="mb-0">Rating:</Form.Label>
                    <StarRating className="d-block fs-3" rating={0} />
                  </div>
                  <div className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" />
                  </div>
                  <div className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" />
                  </div>
                  <div className="mb-3">
                    <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea" rows="3" type="text" />
                  </div>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

ProductDetailsFooter.propTypes = {
  product: PropTypes.shape({
    desc: PropTypes.string,
    specification: PropTypes.object,
    reviews: PropTypes.arrayOf(PropTypes.object)
  })
};

export default ProductDetailsFooter;
