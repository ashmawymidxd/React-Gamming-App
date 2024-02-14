import React from "react";
import "./FeaturedGamesCard.css";
import popular_01 from "../../assets/images/featured-01.jpg";
function FeaturedGamesCard() {
  return (
    <div className="slider">
      <div class="item">
        <div class="thumb">
          <img src={popular_01} alt="" />
          <div class="hover-effect">
            <h6>2.4K Streaming</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h4>
            CS-GO
            <br />
            <span>249K Downloads</span>
          </h4>
          <ul>
            <li>
              <i class="fa fa-star"></i> 4.8
            </li>
            <li>
              <i class="fa fa-download"></i> 2.3M
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="thumb">
          <img src={popular_01} alt="" />
          <div class="hover-effect">
            <h6>2.4K Streaming</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h4>
            CS-GO
            <br />
            <span>249K Downloads</span>
          </h4>
          <ul>
            <li>
              <i class="fa fa-star"></i> 4.8
            </li>
            <li>
              <i class="fa fa-download"></i> 2.3M
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="thumb">
          <img src={popular_01} alt="" />
          <div class="hover-effect">
            <h6>2.4K Streaming</h6>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h4>
            CS-GO
            <br />
            <span>249K Downloads</span>
          </h4>
          <ul>
            <li>
              <i class="fa fa-star"></i> 4.8
            </li>
            <li>
              <i class="fa fa-download"></i> 2.3M
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGamesCard;
