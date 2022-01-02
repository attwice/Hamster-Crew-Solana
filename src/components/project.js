import React from "react";
import {
  Row,
  Col
} from "react-bootstrap";

const Project = () => {
  return (
    <div>
      <Row className="project gx-0">
        <Col xl={6} className="text-center mx-0">
          <a id="about"><img className="projectimg" src="./images/Projectimg.png" alt="projectimg"></img></a>
        </Col>
        <Col xl={6} className="mx-0">
          <h2 className="font-pop f-70 text-white font-weight-bold mt-5">
            PROJECT THUG<br />
            <span className="text-purple">HAMSTER </span>
            CREW
          </h2>
          <p className="mt-5 f-20 text-white font-pop">
            The Hamster crew have been working very hard behind the scenes
            to assemble the best suited team behind this project. The team
            believe that creating a shared community amongst all holders is
            essential for the future of this project
          </p>
          <p className="mt-4 f-20 text-white font-pop">
            Going forward the utilites for phase 1/roadmap 1 is $THC Airdrop,
            Breeding, Floor purger,  DAO,  3D Voxel Models
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Project;