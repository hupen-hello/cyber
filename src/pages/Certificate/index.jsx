import React from 'react'

function Certificate() {
  return (
    <>
     <div className="modal fade coomon_cert" id="product_view">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a href="#" data-dismiss="modal" className="class pull-right">
                  <span className="fa fa-times" />
                </a>
                <h3 className="modal-title">CERTIFICATE DETAILS</h3>
              </div>
              <div className="modal-body">
                <table className="" id="customers">
                  <tbody>
                    <tr>
                      <td>Certificate Number</td>
                      <td>CSN7019</td>
                    </tr>
                    <tr>
                      <td>Client Name</td>
                      <td>Shiva Kumar</td>
                    </tr>
                    <tr>
                      <td>Company Name</td>
                      <td>Ebix Travels Pvt Ltd</td>
                    </tr>
                    <tr>
                      <td>Certificate Type</td>
                      <td>PCI DSS 4.0</td>
                    </tr>
                    <tr>
                      <td>Valid From</td>
                      <td>20 September,2023</td>
                    </tr>
                    <tr>
                      <td>Valid Till</td>
                      <td>19 September,2024</td>
                    </tr>
                  </tbody>
                </table>
                <div className="verFED_img">
                  <img src="assets/img/verified.png" alt="verified" />
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Certificate