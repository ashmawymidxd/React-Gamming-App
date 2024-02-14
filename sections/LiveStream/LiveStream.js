import React from "react";
import { SectionHeader } from "../../Components";
// import { SectionWropper } from "../../Components";

import { LiveStreamCard } from "../../Components";
import LiveStreamData from "../../Data/LiveStreamData";

function LiveStream() {
  return (
    <>
      <div className="row p-2">
        <div class="col-lg-12 text-center">
          <SectionHeader>
            <am>How To Start Your </am> Live Stream
          </SectionHeader>
            <div className="row col-md-12 p-2">
              {LiveStreamData.map((item) => (
                <LiveStreamCard
                  img={item.img}
                  header={item.header}
                  discription={item.discription}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveStream;
