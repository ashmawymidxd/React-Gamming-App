import React from "react";
import { FeaturedGames, TopDown, LiveStream ,Stream} from "../../sections";
import { FlexWropper } from "../../Components";

const Browes = () => {
  return (
    <>
      <FlexWropper>
        <FeaturedGames />
        <TopDown />
      </FlexWropper>
      <LiveStream />
      <Stream/>
    </>
  );
};

export default Browes;
