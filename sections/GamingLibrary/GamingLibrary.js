import React from "react";
import "./GamingLibrary.css";

import { SectionHeader } from "../../Components";
import { SectionWropper } from "../../Components";
import { GamingLibraryCard } from "../../Components";

import GamingLibraryData from "../../Data/GamingLibraryData";

const btn = {
  marginBottom: "-40px",
};

const MostPopular = () => {
  return (
    <SectionWropper>
      <div className="row p-2">
        <div class="col-lg-12" >
          <SectionHeader>
            <am>Gaming Library</am> Right Now
          </SectionHeader>
          <div class="row GamingLibraryCard">
            {GamingLibraryData.map((item) => (
              <GamingLibraryCard
                image={item.image}
                title={item.title}
                category={item.category}
                rat={item.rat}
                download={item.download}
                name={item.name}
                subname={item.subname}
                downloadStatus={item.downloadStatus}
              />
            ))}
            {/* <GamingLibraryCard image={popular_01} title="pubge" category="for" rat="12.6" download="222M" /> */}
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
