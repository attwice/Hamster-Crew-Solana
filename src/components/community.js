import React from "react";

const Community = () => {
  return (
    <div className="community bg-lp">
      <p className="f-35 text-white text-center font-pop mb-4">JOIN OUR</p>
      <h2 className="text-purple text-center f-70 mb-4">COMMUNITY</h2>
      <p className="max1100 f-20 text-white text-center font-pop mb-130 mx-auto">
        Duis quis sapien enim. Phasellus varius leo pretium massa euismod
        condimentum. Ut vitae augue vitae lectus rhoncus placerat eget in
        tortor. Nunc a tempor justo, at
      </p>
      <div className="d-flex justify-content-center">
        <p className="navbtn text-white my-auto f-20 font-pop text-center" href="#action1">TWITTER</p>
        <p className="navbtn text-white my-auto f-20 font-pop text-center" href="#action2">DISCORD</p>
      </div>
    </div>
  );
};

export default Community;