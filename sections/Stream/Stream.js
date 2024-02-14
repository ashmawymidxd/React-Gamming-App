import React from "react";
import {
  SectionHeader,
  SectionWropper,
  StreamCard,
} from "../../Components";

import "./Stream.css";

const Stream = () => {
  return (
      <SectionWropper>
        <SectionHeader>
          <am>Most Popular </am> Live Stream
          <StreamCard />
        </SectionHeader>
      </SectionWropper>
  );
};

export default Stream;
