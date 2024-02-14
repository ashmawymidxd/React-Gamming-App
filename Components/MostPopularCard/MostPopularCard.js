import React from "react";
import "./MostPopularCard.css";
// import { faStar } from "react-bootstrap-icons";


function MostPopularCard(props) {
  return (
    <>
      <div class="col-lg-3 col-sm-6 mt-3">
        <div class="item">
          <img src={props.image} alt="" />
          <div className="flex mt-3">
            <h4>
              {props.title}
              <br />
              <span>{props.category}</span>
            </h4>
            <ul>
              <li><faStar/>
                <i class="fa fa-star" style={{"color":"yellow"}}></i> {props.rat}
              </li>
              <li>
                <i class="fa fa-download"></i> {props.download}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MostPopularCard;
