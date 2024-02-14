import React from "react";

const SectionHeader = (props) => {
  return (
    <div>
      <div class="heading-section">
        <h1>
            {props.children}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;
