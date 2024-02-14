import React from 'react';
import './SectionWropper.css'
const SectionWropper = (props) => {
  return (
    <div className='wapper'>
      {props.children}
    </div>
  );
}

export default SectionWropper;
