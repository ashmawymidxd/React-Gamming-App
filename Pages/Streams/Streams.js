import React from "react";
import { FeaturedGames, TopDown ,MostPopular} from "../../sections";
import { FlexWropper } from "../../Components";

const Streams = () => {
  return (
    <>
      <FlexWropper>
        <FeaturedGames />
        <TopDown />
      </FlexWropper>
      <MostPopular />

    </>
  );
};

export default Streams;
