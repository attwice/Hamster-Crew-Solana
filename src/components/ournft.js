import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1800 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1800, min: 1400 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1400, min: 876 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 876, min: 360 },
    items: 1
  }
};

const Ournft = () => {
  return (
    <div className="ournft">
      <a id="nft">
      <h2 className="ournftbg font-pop f-70 text-white font-weight-bold text-center">
        OUR NFT'S
      </h2></a>
      <p className="ournfttxt f-20 text-center mt-4 text-white mx-auto mb-130">
        The Thug Hamster Crew collection consist of 3333 Uniquely generated Nfts on
        the Solana blockchain
      </p>
      <div className="IndicatorCarousel text-center">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="IndicatorCarouselCard pb-100">
            <img className="caroimg" src="../images/cimg(1).png" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg" src="../images/cimg(2).png" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg" src="../images/cimg(3).png" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg" src="../images/cimg(4).png" alt="carousolimg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Ournft;