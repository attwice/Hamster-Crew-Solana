import React from "react";
import {
  Navbar,
  Nav,
  Row,
  Col
} from "react-bootstrap";

const Header = () => {
  return (
    <div className="header px-625">
      <a id="home">
        <h2 className="font-pop logotxt text-center f-35 text-white mx-auto font-weight-bold">
          THUG HAMSTER<br />
          <p className="f-50 text-purple">CREW</p>
        </h2>
      </a>
      <Navbar className="navpos" bg="" expand="xl">
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
          >
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#nft">NFT'S</Nav.Link>
            <Nav.Link href="#team">TEAM</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <div className="d-xl-flex d-grid">
            <button className="navbtn text-white my-auto f-20 font-pop text-center" href="#action1">TWITTER</button>
            <button className="navbtn text-white my-auto f-20 font-pop text-center" href="#action2">DISCORD</button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Row className="mt-0 mt-md-5">
        <Col xl={6}>
          <h2 className="font-pop f-70 text-white font-weight-bold mt-200">
            THUG<br />
            <span className="text-purple">HAMSTER </span>
            CREW
          </h2>
          <p className="text-white font-pop font-20">#THC  THE ENTITY DOSENT LIE....</p>
          <p className="navbtn text-white my-auto f-20 font-pop text-center max240" href="#">
            MINT NOW
          </p>
        </Col>
        <Col xl={6} className="text-center">
          <img className="topimg" src="./images/topimg.png" alt="topimg"></img>
        </Col>
      </Row>
    </div >
  );
};
export default Header;