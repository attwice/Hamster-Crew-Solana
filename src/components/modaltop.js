import React, { useState } from "react";
import { Modal } from 'react-bootstrap';

import {
  Navbar,
  Nav,
  Button
} from "react-bootstrap";




const Modaltop = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reload = () => window.location.reload();

  return (
    <div className="">
      <Navbar variant="dark" expand="md" style={{ background: 'transparent' }}>
        <Modal animation={true} show={show} onHide={handleClose} className="custom-view" style={{ left: 'auto', right: 0, overflow: 'hidden' }}>
          <Modal.Header>
            <button type="button" className="close" data- dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body>
            <Nav
              className="text-center me-auto my-2 my-lg-0"
            >
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#nft">NFT'S</Nav.Link>
              <Nav.Link href="#team">TEAM</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>

          </Modal.Body>
          <Modal.Footer className="justify-content-center border-0">
            <div className="d-flex flex-column">
              <button className="navbtn text-white my-auto f-20 font-pop text-center" href="#action1">TWITTER</button>
              <button className="navbtn text-white my-auto f-20 font-pop text-center" href="#action2">DISCORD</button>
            </div>
          </Modal.Footer>
        </Modal>
      </Navbar>
      <Nav.Item>
        <button className="togbtn d-block d-xl-none" onClick={() => handleShow()} ></button>
      </Nav.Item>
    </div>
  );
};


export default Modaltop;