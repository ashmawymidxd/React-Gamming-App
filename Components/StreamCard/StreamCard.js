import React from "react";
import "./StreamCard.css";
import stream_01 from "../../assets/images/stream-01.jpg";
import stream_02 from "../../assets/images/stream-02.jpg";
import stream_03 from "../../assets/images/stream-03.jpg";
import stream_04 from "../../assets/images/stream-04.jpg";
function StreamCard() {
  return (
    <>
    <div className="slider">
      <div class="item h-50">
        <div class="thumb">
          <img src={stream_01} alt="" className="h-50" />
          <div class="hover-effect"></div>
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
      <div class="item h-50">
        <div class="thumb">
          <img src={stream_02} alt="" className="h-50" />
          <div class="hover-effect"></div>
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
      <div class="item h-50">
        <div class="thumb">
          <img src={stream_03} alt="" className="h-50" />
          <div class="hover-effect"></div>
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
      <div class="item h-50">
        <div class="thumb">
          <img src={stream_04} alt="" className="h-50" />
          <div class="hover-effect"></div>
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
      <div class="item h-50">
        <div class="thumb">
          <img src={stream_04} alt="" className="h-50" />
          <div class="hover-effect"></div>
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
      <div class="col-lg-12">
        <div class="main-button text-center">
          <a className="btn btn-success btn-rounded p-3" href="browse.html">
            Discover Popular
          </a>
        </div>
      </div>
    </>
  );
}

export default StreamCard;
