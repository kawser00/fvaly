import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag, FiUser } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import logo from 'assets/images/fvaly.png';
import { BiSearch, BiBell, BiComment } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="header__component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-4">
            <li>
              <FiPhoneCall /> <a href="tel:09638111666">09638111666</a>
            </li>
            <li>
              <FaRegEnvelope />{' '}
              <a href="mail-to:support@evaly.com.bd">support@evaly.com.bd</a>
            </li>
          </ul>
          <div>
            <BsPhone />{' '}
            <a href="mail-to:support@evaly.com.bd">Save big on our app!</a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center py-3 gap-5">
            <img className="branding" src={logo} alt="fvaly" />
            <InputGroup className="">
              <FormControl
                className="border border-primary"
                placeholder="search Here..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-2">
              <li>
                <FiShoppingBag />
              </li>
              <li>
                <BiBell />
              </li>
              <li>
                <BiComment />
              </li>
              <li>
                <FiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News Feed</Nav.Link>
            <Nav.Link href="#features">Merchant Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
