import React, { Component } from 'react';
import "../../assets/css/dashboard.css";



export class Dashboard extends Component {
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  constructor(props){
    super(props)
    this.state = {
      startDate: new Date(),
      visitSaleData: {},
      visitSaleOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display:false,
              min: 0,
              stepSize: 20,
              max: 80
            },
            gridLines: {
              drawBorder: false,
              color: 'rgba(235,237,242,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            }
          }],
          xAxes: [{
            gridLines: {
              display:false,
              drawBorder: false,
              color: 'rgba(0,0,0,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            },
            ticks: {
              padding: 20,
              fontColor: "#9c9fa6",
              autoSkip: true,
            },
            categoryPercentage: 0.5,
            barPercentage: 0.5
        }]
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        }
      },
      trafficData: {},
      trafficOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: false,
      },
      
      inputValue: '',
    }

  }

  render () {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="">
              <i className="mdi mdi-home"></i>
            </span> Dashboard </h3>
          <nav aria-label="breadcrumb">
            {/* <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul> */}
          </nav>
        </div>
      {/*   Overview Start */}
      <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="clearfix mb-4">
                  <h4 className="card-title float-left">Sales Overview</h4>
                  {/* Option dots */}
                  <i className="mdi mdi-dots-vertical float-right"></i>
                </div>
                {/* Item Data */}
                <div className="row">
                <div className="col-md-6">
                  <div className="row">
                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/cash-register.png")} className="mr-1" alt="total sales" />
                  </div>

                  <div className="col-md-7">
                  <p>Total Sales</p>
                  <h5>345</h5>
                  </div>

                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/money-bag-1.png")} className="mr-2" alt="cost" />
                  </div>

                  <div className="col-md-7">
                  <p>Cost</p>
                  <h5>25,000,000</h5>
                  </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="row">
                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/data-analysis.png")} className="mr-1" alt="data" />
                  </div>

                  <div className="col-md-7">
                  <p>Revenue</p>
                  <h5>345</h5>
                  </div>

                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/profits.png")} className="mr-2" alt="Profits" />
                  </div>

                  <div className="col-md-7">
                  <p>Profit</p>
                  <h5>9,000,000</h5>
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="clearfix mb-4">
                  <h4 className="card-title float-left">Purchase Overview</h4>
                  {/* Option dots */}
                  <i className="mdi mdi-dots-vertical float-right"></i>
                </div>
                {/* Item Data */}
                <div className="row">
                <div className="col-md-6">
                  <div className="row">
                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/invoice.png")} className="mr-1" alt="total sales" />
                  </div>

                  <div className="col-md-7">
                  <p>Total Purchases</p>
                  <h5>345</h5>
                  </div>

                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/money-bag-1.png")} className="mr-2" alt="cost" />
                  </div>

                  <div className="col-md-7">
                  <p>Cost</p>
                  <h5>25,000,000</h5>
                  </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="row">
                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/order.png")} className="mr-1" alt="data" />
                  </div>

                  <div className="col-md-7">
                  <p>Canceled Order</p>
                  <h5>13</h5>
                  </div>

                  <div className="col-md-4">
                    <img src={require("../../assets/images/dashboard/return-box.png")} className="mr-1" alt="Profits" />
                  </div>

                  <div className="col-md-7">
                  <p>Returns</p>
                  <h5>01</h5>
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/*   Overview Ends */}
      {/*   Summary Starts */}
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-default card-img-holder">
              <div className="card-body">

                <h5 className="font-weight-normal mb-3">Inventory Summary <i className="mdi mdi-dots-vertical float-right"></i>
                </h5>
                <div className="row">
                  <div className="col-md-5 card-body card-background">
                    <img src={require("../../assets/images/dashboard/package.png")} className="img-fluid img-rep" alt="total sales" />
                    <p>Quantity in Hand</p>
                  <h5>1,436</h5>
                  </div>

                  <div className="col-md-5 card-body card-background">
                    <img src={require("../../assets/images/dashboard/inbox.png")} className="img-fluid img-rep" alt="total sales" />
                    <p>Will be received</p>
                  <h5>2</h5>
                  </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-default card-img-holder">
              <div className="card-body">

                <h4 className="font-weight-normal mb-3">Inventory Summary <i className="mdi mdi-dots-vertical float-right"></i>
                </h4>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td style={{lineHeight: 5}}> Low Stock Items </td>
                        <td align='right'> <h5>12</h5> </td>
                      </tr>
                      <tr>
                        <td style={{lineHeight: 5}}> Item Group </td>
                        <td align='right'> <h5>42</h5> </td>
                      </tr>
                      <tr>
                        <td style={{lineHeight: 5}}> No of Items </td>
                        <td align='right'> <h5>198 </h5></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-default card-img-holder">
              <div className="card-body">

                <h5 className="font-weight-normal mb-3">No of users <i className="mdi mdi-dots-vertical float-right"></i>
                </h5>
                <div className="row">
                  <div className="col-md-5 card-body card-background">
                    <img src={require("../../assets/images/dashboard/customer-review.png")} className="img-rep img-fluid" alt="total sales" />
                    <p>Total Customers</p>
                  <h5>2.7K</h5>
                  </div>

                  <div className="col-md-5 card-body card-background">
                    <img src={require("../../assets/images/dashboard/customer.png")} className="img-rep img-fluid" alt="total sales" />
                    <p>Total Suppliers</p>
                  <h5>32</h5>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="clearfix mb-4">
                  <h4 className="card-title float-left">Sales and Purchases Statistics</h4>
                  <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-center float-center">
                    <ul>
                      <li>
                        <span className="legend-dots bg-danger">
                        </span>Sales
                      </li>
                      <li>
                        <span className="legend-dots bg-primary">
                        </span>Purchases
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
export default Dashboard;