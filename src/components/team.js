import React from "react";
import { Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

const Team = () => {
  return (
    <div className="team">
      <a id="team" href="/#">
      <h2 className="text-white f-70 font-weight-bold font-pop text-center mb-5">
        TEAM
      </h2></a>
      <p className="teamtxt f-20 mt-3 text-center font-pop text-white mx-auto mb-130">
        This Team outlines our goals and where we want to take project.
        We have a lot of ideas and concepts that we are working on. It
        will evolve over time and hopefully become even better!
      </p>
      <Row>
        <Col className="px-3" lg={3} md={6}>
          <img className="w-100 text-center" src="../images/teamimg1.png" alt="team" />
          <p className="f-20 text-white mt-3">@PXZER <br />MARKETING MANAGER</p>
        </Col>
        <Col className="px-3" lg={3} md={6}>
          <img className="w-100 text-center"  src="../images/teamimg2.png" alt="team" />
          <p className="f-20 text-white mt-3">@JOSEF <br />GRAPHIC DESIGNER</p>
        </Col>
        <Col className="px-3" lg={3} md={6}>
          <img className="w-100 text-center"  src="../images/teamimg3.png" alt="team" />
          <p className="f-20 text-white mt-3">@WHYALEX <br />PROJECT MANAGER</p>
        </Col>
        <Col className="px-3" lg={3} md={6}>
          <img className="w-100 text-center"  src="../images/teamimg4.png" alt="team" />
          <p className="f-20 text-white mt-3">@ROO <br />PROJECT DEVELOPER</p>
        </Col>
      </Row >
    </div >
  );
};

export default Team;