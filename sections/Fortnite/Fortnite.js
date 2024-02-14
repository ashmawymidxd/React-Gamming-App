import React from "react";
import { SectionWropper } from "../../Components";
import img1 from "../../assets/images/details-01.jpg";
import img2 from "../../assets/images/details-02.jpg";
import img3 from "../../assets/images/details-03.jpg";
import GamingLibrary from "../GamingLibrary/GamingLibrary";
function Fortnite() {
  return (
    <div>
      <SectionWropper>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-between">
            <div className="left-side">
              <h6 className="text-light">Fortnite</h6>
              <p className="text-light text-secondary">sandbox</p>
            </div>
            <div className="right-side">
              <span>
                14<i class="fa fa-download"></i>
              </span>
              <br />
              <span>
                14<i class="fa fa-star"></i>
              </span>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-around">
            <div>
              <i class="fa fa-star"></i>
              <br />
              13
            </div>
            <div>
              <i class="fa fa-download"></i>
              <br />
              13
            </div>
            <div>
              <i class="fa fa-gamepad"></i>
              <br />
              13
            </div>
            <div>
              <i class="fa fa-server"></i>
              <br />
              13
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <img src={img1} alt="img1" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4">
            <img src={img2} alt="img2" className="img-fluid rounded-3" />
          </div>
          <div className="col-md-4">
            <img src={img3} alt="img3" className="img-fluid rounded-3" />
          </div>
        </div>

      </SectionWropper>
        <GamingLibrary />
    </div>
  );
}

export default Fortnite;
