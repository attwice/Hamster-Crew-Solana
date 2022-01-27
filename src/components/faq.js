import React from "react";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faq-container purple-text">
      <a id="faq" href="/#">
      <h2 className="faqbg text-white f-70 font-weight-bold font-pop text-center mb-130">
        FREQUENTLY ASKED <br /> QUESTIONS
      </h2></a>
      <Accordion className="mt-150">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="f-20">
            What are the plans going forward with the Hamster NFT
          </Accordion.Header>
          <Accordion.Body className="f-18">
            $THC Airdrop, Breeding, Floor purger,  DAO,  3D Voxel Models
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="f-20">
            How much will it cost to mint a Hamster NFT?
          </Accordion.Header>
          <Accordion.Body className="f-18">
            1 SOL per Nft
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="f-20">
            When is Presale/ Public mint?
          </Accordion.Header>
          <Accordion.Body className="f-18">
            We are aiming to launch public mint on February 15. Presale is TBA   </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="f-20">
            What is the supply?
          </Accordion.Header>
          <Accordion.Body className="f-18">
            The supply consists of 3333 Nfts
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="f-20">
            What is the Thug Hamster Crew NFT?
          </Accordion.Header>
          <Accordion.Body className="f-18">
            The Thug Hamster Crew NFT is a collection of 3333 Hamsters built on the Solana network
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;