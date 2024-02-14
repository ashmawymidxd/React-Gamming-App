import React from 'react';
import './FlexWropper.css'
const FlexWropper = (props) => {
  return (
    <div className='d-flex justify-content-between gap-5'>
      {props.children}
    </div>
  );
}

export default FlexWropper;
