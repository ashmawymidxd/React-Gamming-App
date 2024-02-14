import React from "react";
import DetailesHero from "../../sections/DetailesHero/DetailesHero";
import Fortnite from "../../sections/Fortnite/Fortnite";
function details() {
  return (
    <>
      <DetailesHero />
      <h1 className="text-light text-center my-5">FORTNITE DETAILS</h1>
      <Fortnite/>
    </>
  );
}

export default details;
