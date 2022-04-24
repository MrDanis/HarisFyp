import React from 'react';
import '../UserCSS/UserDashboard.css'
import ReactApexChart from 'react-apexcharts'
const UserDashboard=()=> {
  //data for the user Yearly orders Graph
  const UserYearlyOrders=[44, 55, 41, 17, 15,44, 55, 41, 17, 15,17, 15]
    const UserYearlyOptions = {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom',
            display:false
          }
        }
      }]
    }
    const UserMonthlyOrders=[44, 55, 41, 17]
    const UserMonthlyOptions = {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom',
            display:false
          }
        }
      }]
    }
    //Totall purchase Chart
    const totalPurchaseSeries =[{name: 'Performance Since Inception',data: [31, 40, 28, 51, 42, 109, 100]}]
   const totalPurchaseData={
      chart: {
        height: 350,
        type: 'line'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
  return (
    <div className='container-fluid m-0' style={{padding:'15px'}}>
        <div className='row mb-3 pb-3 m-0 p-0 userProfileTopbarRow'>
           {/* Box 1 styling Start */}
           <div className="col-12 col-md-3 mb-2 mb-md-0">
                <div className='container-fluid m-0 p-0'>
                   <div className='row m-0 p-0'>
                      <div className=' col-12 m-0 shadow userDashboardTopBoxes'>
                        <h3 className='userDashboardTopBoxesTitle'>Total Orders</h3>
                        <h5 className='userDashboardTopBoxesOrderNo'>32451</h5>
                        <div className='row m-0 py-2 p-0 w-100 userDashboardTopBoxesAmountRow'>
                         <div className='col-12 col-md-6 m-0 p-0 userDashboardTopBoxesAmountText d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              Amount
                            </p>
                         </div>
                         <div className='col-12 col-md-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              375,123
                            </p>
                         </div>
                        </div>
                      </div>
                   </div>
                </div>     
           </div>
           {/* Box 1 styling End */}
           {/* Box 2 styling Start */}
           <div className="col-12 col-md-3 mb-2 mb-md-0">
                <div className='container-fluid m-0 p-0'>
                   <div className='row m-0 p-0'>
                   <div className=' col-12 m-0 shadow userDashboardTopBoxes'>
                        <h3 className='userDashboardTopBoxesTitle'>Monthly Orders</h3>
                        <h5 className='userDashboardTopBoxesOrderNo'>32451</h5>
                        <div className='row m-0 py-2 p-0 w-100 userDashboardTopBoxesAmountRow'>
                         <div className='col-12 col-md-6 m-0 p-0 userDashboardTopBoxesAmountText d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              Amount
                            </p>
                         </div>
                         <div className='col-12 col-md-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              375,123
                            </p>
                         </div>
                        </div>
                      </div>
                   </div>
                </div>     
           </div>
           {/* Box 2 styling End */}
           {/* Box 3 styling Start */}
           <div className="col-12 col-md-3 mb-2 mb-md-0">
                <div className='container-fluid m-0 p-0'>
                   <div className='row m-0 p-0'>
                   <div className=' col-12 m-0 shadow userDashboardTopBoxes'>
                        <h3 className='userDashboardTopBoxesTitle'>Weekly Orders</h3>
                        <h5 className='userDashboardTopBoxesOrderNo'>32451</h5>
                        <div className='row m-0 py-2 p-0 w-100 userDashboardTopBoxesAmountRow'>
                         <div className='col-12 col-md-6 m-0 p-0 userDashboardTopBoxesAmountText d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              Amount
                            </p>
                         </div>
                         <div className='col-12 col-md-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              375,123
                            </p>
                         </div>
                        </div>
                      </div>
                   </div>
                </div>     
           </div>
           {/* Box 3 styling End */}
           {/* Box 4 styling Start */}
           <div className="col-12 col-md-3 mb-2 mb-md-0">
                <div className='container-fluid m-0 p-0'>
                   <div className='row m-0 p-0'>
                   <div className=' col-12 m-0 shadow userDashboardTopBoxes'>
                        <h3 className='userDashboardTopBoxesTitle'>Daily Orders</h3>
                        <h5 className='userDashboardTopBoxesOrderNo'>32451</h5>
                        <div className='row m-0 py-2 p-0 w-100 userDashboardTopBoxesAmountRow'>
                         <div className='col-12 col-md-6 m-0 p-0 userDashboardTopBoxesAmountText d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              Amount
                            </p>
                         </div>
                         <div className='col-12 col-md-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                            <p className='m-0 p-0'>
                              375,123
                            </p>
                         </div>
                        </div>
                      </div>
                   </div>
                </div>     
           </div>
           {/* Box 4 styling End */}
        </div>
        <div className='row m-0 userprofileChartFirstRow' style={{padding:'0px 10px 0px 10px'}}>
         {/* Chart 1 box Start */}
         <div className='col-12 col-md-6 m-0' style={{padding:'0px 12.5px 0px 0px'}}>
           <div className='container-fluid m-0 p-0'>
             <div className='row m-0 shadow' style={{padding:'10px',borderRadius:'10px'}}>
               {/* Title text heading Start */}
               <div className=' col-12'>
                   <h5>Yearly Orders Graphs</h5>
               </div>
               {/* Title text heading End */}
               {/* First Chart Start */}
               <div className=' col-12'>
                {/* Graph will show the number of the order that a user take in one month */}
                <ReactApexChart options={UserYearlyOptions} series={UserYearlyOrders} type="donut" height={350} />
               </div>
               {/* First Chart End */}
             </div>
           </div>
         </div>
         {/* Chart 1 box End */}
         {/* Chart 2 box Start */}
         <div className='col-12 col-md-6 m-0' style={{padding:'0px 0px 0px 12.5px'}}>
           <div className='container-fluid m-0 p-0'>
             <div className='row m-0 shadow' style={{padding:'10px',borderRadius:'10px'}}>
               {/* Title text heading Start */}
               <div className=' col-12'>
                   <h5>Monthly Orders Graphs</h5>
               </div>
               {/* Title text heading End */}
               {/* First Chart Start */}
               <div className='col-12'>
               <ReactApexChart options={UserMonthlyOptions} series={UserMonthlyOrders} type="donut" height={350} />
               </div>
               {/* First Chart End */}
             </div>
           </div>
         </div>
         {/* Chart 2 box End */}
        </div>
        <div className='row mt-3 mb-2 m-0  userprofileChartSecondRow' style={{padding:'0px 10px 0px 10px'}}>
        <div className='col-12 m-0 p-0'>
           <div className='container-fluid m-0 p-0'>
             <div className='row m-0 shadow' style={{padding:'10px',borderRadius:'10px'}}>
               {/* Title text heading Start */}
               <div className=' col-12'>
                <h5>Total purchase since inception</h5>
               </div>
               {/* Title text heading End */}
               {/* First Chart Start */}
               <div className=' col-12'>
               <ReactApexChart options={totalPurchaseData} series={totalPurchaseSeries} type="line" height={350} />
               </div>
               {/* First Chart End */}
             </div>
           </div>
         </div>
        </div>
    </div>
  )
}

export default UserDashboard