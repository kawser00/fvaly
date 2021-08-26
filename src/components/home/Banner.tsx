import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item className="d-center-between" action href="#link1">
                <span>Desktop</span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-center-between" action href="#link2">
                <span>Laptop</span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-center-between" action href="#link3">
                <span>Men&apos;s Watch </span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-center-between" action href="#link4">
                <span>Motor Bike</span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-center-between" action href="#link5">
                <span>Smart Phone</span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-center-between" action href="#link6">
                <span>Speaker</span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-center-between" action href="#link7">
                <span>Refrigerator</span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-center-between" action href="#link8">
                <span>Smart TV & Android TV</span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={9} className="mt-4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
