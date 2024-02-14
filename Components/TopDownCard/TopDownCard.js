import React from "react";
import "./TopDownCard.css";
// import { faStar } from "react-bootstrap-icons";

function TopDownCard(props) {
  return (
    <>
      <div className="item-card-down m-3">
        <ul>
          <li>
            <img src={props.image} alt="" className="templatemo-item" />
          </li>
          <li className="flex-col">
            <span>{props.title}</span>
            <span>{props.category}</span>
            <div className="flex-row">
              <i class="fa fa-star" style={{ color: "yellow" }}></i> {props.rat}
              <i class="fa fa-download"></i> {props.download}
            </div>
          </li>
          <li>
            <div className="bg-dark rounded-circle p-3">
              <i class="fa fa-download"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TopDownCard;
