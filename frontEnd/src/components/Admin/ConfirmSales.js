import React, { Component } from "react";
import "../../assets/css/dashboard.css";
import Table from 'react-bootstrap/Table';
export class ConfirmSales extends Component {
  
  render() {

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="">
              <i className="mdi mdi-home"></i>
            </span>
            Point of Sales
          </h3>
          <nav aria-label="breadcrumb"></nav>
        </div>
        {/*   Overview Start */}

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="row" style={{ margin: "10px" }}>
                <div class="col-md-4">
                  <img
                    src={require("../../assets/images/POS/product.svg")}
                    className="card-img-top"
                    alt="total sales"
                  />
                  <div class="center-text">
                    <h4 class="card-title">Item Name</h4>
                    <p class="card-text">₦ 25,000</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <img
                    src={require("../../assets/images/POS/product.svg")}
                    className="card-img-top"
                    alt="total sales"
                  />
                  <div class="center-text">
                    <h4 class="card-title">Item Name</h4>
                    <p class="card-text">₦ 25,000</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <img
                    src={require("../../assets/images/POS/product.svg")}
                    className="card-img-top"
                    alt="total sales"
                  />
                  <div class="center-text">
                    <h4 class="card-title">Item Name</h4>
                    <p class="card-text">₦ 25,000</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <img
                    src={require("../../assets/images/POS/product.svg")}
                    className="card-img-top"
                    alt="total sales"
                  />
                  <div class="center-text">
                    <h4 class="card-title">Item Name</h4>
                    <p class="card-text">₦ 25,000</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <img
                    src={require("../../assets/images/POS/product.svg")}
                    className="card-img-top"
                    alt="total sales"
                  />
                  <div class="center-text">
                    <h4 class="card-title">Item Name</h4>
                    <p class="card-text">₦ 25,000</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <img
                    src={require("../../assets/images/POS/product.svg")}
                    className="card-img-top"
                    alt="total sales"
                  />
                  <div class="center-text">
                    <h4 class="card-title">Item Name</h4>
                    <p class="card-text">₦ 25,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body" style={{height: '100%'}}>
                
                <div className="row pos-total">
                  <div className="col-md-6" style={{lineHeight: '50px'}}>
                    <p>Total Amount:</p>
                    <br></br>
                    <p>Paid:</p>
                    <br></br>
                    <p>Change:</p>
                    <br></br>
                    <p>Payment Method:</p>
                  </div>

                  <div className="col-md-6">
                    <p>
                      <input type={"text"} className='form-control' value={"100,000"}></input>
                    </p>
                    <p>
                    <input type={"text"} className='form-control' value={"100,000"}></input> 
                    <button className="btn btn-md btn-success">
                  Exact Cash
                </button>
                    </p>
                    <p>
                      <input type={"text"} className='form-control' value={"50,000"}></input>
                    </p>
                    <p>
                        <select className="form-control">
                            <option defaultValue={''}>Select One</option>
                            <option>Select One</option>
                        </select>
                    </p>
                  </div>
                  <div className="col-md-12" style={{marginTop: '30px'}}>
                      <p>Payment Details:</p>
                      <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-md btn-danger">
                  <i className="mdi mdi-trash-can icon-sm  align-middle"></i>{" "}
                  Cancel
                </button>
                
                <button className="btn btn-md btn-success" style={{float: 'right'}}>
                  <i className="mdi mdi-clipboard-text-outline icon-sm  align-middle"></i>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*   Overview Ends */}
      </div>
    );
  }
}
export default ConfirmSales;
