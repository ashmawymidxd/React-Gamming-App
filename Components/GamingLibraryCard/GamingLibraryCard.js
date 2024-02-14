import React from "react";
import "./GamingLibraryCard.css";
// import { faStar } from "react-bootstrap-icons";

function GamingLibraryCard(props) {
  return (
    <>
      <div className="item-card mt-3">
        <ul>
          <li>
            <img
              src={props.image}
              alt=""
              className="templatemo-item"
            />
          </li>
          <li>
            <h4>{props.name}</h4>
            <span>{props.subname}</span>
          </li>
          <li>
            <h4>Date Added</h4>
            <span>{props.category}</span>
          </li>
          <li>
            <h4>Hours Played</h4>
            <span>{props.rat}</span>
          </li>
          <li>
            <h4>Currently</h4>
            <span>{props.download}</span>
          </li>
          <li>
            <div className="btn btn-outline-secondary btn-rounded px-4 py-2">
              <a href="/#">{props.downloadStatus}</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default GamingLibraryCard;
