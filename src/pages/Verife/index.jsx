import React from 'react'
import verify from "../../assets/img/certificate.webp";


function Verife() {
  return (
    <>
     <div className="verification">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="ver_img">
                  <img src={verify} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="ver_img_sd">
                  <h3>VERIFY CERTIFICATE</h3>
                  <form>
                    <label>Certicate Number</label>
                    <div className="hhef">
                      <input type="text" placeholder="Certicate Number" />
                      <button
                        className="default-btn text-decoration-none"
                        type="button"
                        data-toggle="modal"
                        data-target="#product_view"
                      >
                        Verify
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Verife