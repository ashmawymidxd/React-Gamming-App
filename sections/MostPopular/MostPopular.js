import React from "react";
import "./MostPopular.css";

import { SectionHeader } from "../../Components";
import { SectionWropper } from "../../Components";
import { MostPopularCard } from "../../Components";

import MostPopularItem from "../../Data/MostPopularData";


const btn = {
  marginBottom: "-40px",
};

const MostPopular = () => {
  return (
    <SectionWropper>
      <div className="row">
        <div class="col-lg-12">
          <SectionHeader>
            <am>Most Popular</am> Right Now
          </SectionHeader>
          <div class="row">
            {MostPopularItem.map((item) => (
              <MostPopularCard
                image={item.image}
                title={item.title}
                category={item.category}
                rat={item.rat}
                download={item.download}
              />
            ))}
            {/* <MostPopularCard image={popular_01} title="pubge" category="for" rat="12.6" download="222M" /> */}
            <div class="col-lg-12">
              <div class="main-button text-center">
                <a
                  className="btn btn-success btn-rounded p-3"
                  href="browse.html"
                  style={btn}
                >
                  Discover Popular
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWropper>
  );
};

export default MostPopular;
