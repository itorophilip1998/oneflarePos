import React, { Component } from "react";
import "../../assets/css/dashboard.css";
import Table from 'react-bootstrap/Table';
export class POS extends Component {
  
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
            <div className="card-heaer">
                <div className="row">
                  <div className="col-md-6">
                    <p className="card-title">Walk-in Customer</p>
                  </div>
                  <div className="col-md-6">
                    <p className="card-title">Ref/Table:</p>
                  </div>
                  <hr></hr>
                  </div>
              </div>
              <div className="card-body">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                        <th>Description </th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1</td>
                      <td>Item Name <br></br>@ 25,000</td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td>25,000</td>
                      <td><i className="mdi mdi-close pointer text-danger icon-sm  align-middle"></i></td>

                    </tr>
                    <tr>
                      <td>#2</td>
                      <td>Item Name <br></br>@ 25,000</td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td>25,000</td>
                      <td><i className="mdi mdi-close text-danger icon-sm  align-middle"></i></td>

                    </tr>

                    <tr>
                      <td>#3</td>
                      <td>Item Name <br></br>@ 25,000</td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td>25,000</td>
                      <td><i className="mdi mdi-close text-danger icon-sm  align-middle"></i></td>

                    </tr>

                    <tr>
                      <td>#4</td>
                      <td>Item Name <br></br>@ 25,000</td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td><input type={"text"} className='form-control'></input></td>
                      <td>25,000</td>
                      <td><i className="mdi mdi-close text-danger icon-sm  align-middle"></i></td>

                    </tr>

                  </tbody>
                </Table>
                <div className="row pos-total">
                  <div className="col-md-6">
                    <p>Discount</p>
                    <br></br>
                    <p>TOTAL</p>
                  </div>

                  <div className="col-md-6">
                    <p>
                      <input type={"text"} className='form-control' value={"50,000"}></input>
                    </p>
                    <p>95,000</p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-md btn-danger">
                  <i className="mdi mdi-trash-can icon-sm  align-middle"></i>{" "}
                  Delete
                </button>
                <button className="btn btn-md btn-info">
                  <i className="mdi mdi-content-paste icon-sm  align-middle"></i>{" "}
                  Order
                </button>
                <button className="btn btn-md btn-primary">
                  <i className="mdi mdi-printer icon-sm  align-middle"></i>{" "}
                  Print
                </button>
                <button className="btn btn-md btn-warning">
                  <i className="mdi mdi-file-document-outline icon-sm  align-middle"></i>{" "}
                  Hold
                </button>
                <button className="btn btn-md btn-success">
                  <i className="mdi mdi-clipboard-text-outline icon-sm  align-middle"></i>
                  PayNow
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
export default POS;
