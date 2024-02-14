import React from "react";
// import "./TopDown.css";

import { SectionHeader } from "../../Components";
import { SectionWropper } from "../../Components";

import { TopDownCard } from "../../Components";
import TopDownData from "../../Data/TopDownData";

// const btn = {
//   marginBottom: "-40px",
// };

const MostPopular = () => {
  return (
    <SectionWropper>
      <div className="row p-2">
        <div class="col-lg-12">
          <SectionHeader>
            <am>Top</am> Downloaded
          </SectionHeader>
          <div class="row TopDown">
            {TopDownData.map((item) => (
              <TopDownCard
                image={item.image}
                title={item.title}
                category={item.category}
                rat={item.rat}
                download={item.download}
              />
            ))}
            {/* <TopDown image={popular_01} title="pubge" category="for" rat="12.6" download="222M" /> */}
            <div class="col-lg-12">
              <div class="main-button text-center">
                <h5>View All Games</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWropper>
  );
};

export default MostPopular;
