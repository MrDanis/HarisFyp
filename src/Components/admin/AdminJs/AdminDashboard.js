import React, { useEffect } from 'react'
import '../AdminCss/MainDashboardStyle.css'
import ReactApexChart from 'react-apexcharts'
const  AdminDashboard=()=> {
  const series =[
   {name: 'Total Sales',data: [31, 40, 28, 51, 42, 109, 100]},
   {name: 'Totall orders',data: [11, 32, 45, 32, 34, 52, 41]}
   ]
   const data={
      chart: {
        height: 350,
        type: 'area'
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
  //For the Performance Chart
   const series2 =[{name: 'Performance Since Inception',data: [31, 40, 28, 51, 42, 109, 100]}]
   const data2={
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
    //Stock Series Chart
    const stockSeries=[44, 55, 41, 17, 15]
    const StockChartOptions = {
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
   //  User Data
   const stockSeries2=[44, 55, 41, 17, 15]
   const StockChartOptions2 = {
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
 useEffect(()=>{    
  console.log();
  },[]);
  return (
    <div className='container-fluid m-0 pt-4 p-0' style={{border:'0px solid red'}}>
     <div className='row mb-4 m-0 p-0'>
      <div className='col-12 col-md-6  col-lg-3 m-0 pr-2' style={{border:'0px solid green'}}>
        <div className='container-fluid m-0 p-0'>
           <div className='row m-0 p-0'>
              <div className='dashboardMainPageTopBoxesUser col-12  m-0 p-0 shadow'>
                <p className='p-3 float-left'>
                <i class="far fa-users fa-2x m-0 p-0"></i>
                </p>
                <p className='text-muted fw-bold p-3 float-right'>
                   65,456
                   <br></br>
                   <span className='fw-normal'>Total Users</span>
                </p>
               </div>
            </div>
          </div>
       </div>
       {/* Totall Sale*/}
       <div className='col-12  col-md-6 m-0 col-lg-3 pr-2' style={{border:'0px solid green'}}>
          <div className='container-fluid m-0 p-0'>
              <div className='row m-0 p-0'>
                  <div className='dashboardMainPageTopBoxesProduct col-12  m-0 p-0 shadow'>
                  <p className='p-3 float-left'>
                   <i class="fal fa-layer-group fa-2x m-0 p-0"></i>
                </p>
                <p className='text-muted fw-bold p-3 float-right'>
                   65,456
                   <br></br>
                   <span className='fw-normal'>Total Products</span>
                </p>
                  </div>
              </div>
          </div>
       </div>
       {/* Totall Orders */}
       <div className='col-12  col-md-6 m-0 col-lg-3 pr-2' style={{border:'0px solid green'}}>
          <div className='container-fluid m-0 p-0'>
            <div className='row m-0 p-0'>
              <div className='dashboardMainPageTopBoxesSale col-12  m-0 p-0 shadow'>
              <p className='p-3 float-left'>
                   <i class="fal fa-chart-line fa-2x m-0 p-0"></i>
                </p>
                <p className='text-muted fw-bold p-3 float-right'>
                   65,456
                   <br></br>
                   <span className='fw-normal'>Total Sale</span>
                </p>
              </div>
            </div>
          </div>
       </div>
       {/* Totall Orders */}
       <div className='col-12 col-md-6 m-0 col-lg-3 ' style={{border:'0px solid green'}}>
          <div className='container-fluid m-0 p-0'>
           <div className='row m-0 p-0'>
              <div className='dashboardMainPageTopBoxes col-12 m-0 p-0 shadow'>
                <p className='p-3 float-left'>
                   <i class=" fa-solid fa-cart-shopping fa-2x m-0 p-0"></i>
                </p>
                <p className='text-muted fw-bold p-3 float-right'>
                   65,456
                   <br></br>
                   <span className='fw-normal'>Total Orders</span>
                </p>
              </div>
           </div>
          </div>
       </div> 
      </div>
      <div className='row mb-4 m-0 p-2 SaleOrderProductUserChart'>
          {/* Sale and order Chart */}
          <div className='col-12 saleChart mb-4 p-0 shadow'>
          <p className='mb-3 mx-3' style={{fontSize:'22px'}}>Sale and Orders since inception</p>
          <ReactApexChart options={data} series={series} type="area" height={350} />
          </div>
          {/* Performance Chart */}
          <div className='col-12 performanceChart mb-4 p-0 shadow'>
          <p className='mb-3 mx-3' style={{fontSize:'22px'}}>Perforamnce Since Inception</p>
           <ReactApexChart options={data2} series={series2} type="area" height={350} />
          </div>
          <div className='col-6 StockChart mb-2'>
           <div className='container-fluid m-0 p-0'>
              <div className='row m-0 p-0'>
                 <div className='col-12 m-0 StockChartInner shadow'>
                   <p className='mb-3 mx-3' style={{fontSize:'22px'}}>Totall Stock</p>
                   <ReactApexChart options={StockChartOptions} series={stockSeries} type="donut" height={350} />
                 </div>
              </div>
           </div>
          </div>
          {/* Users Chart */}
          <div className='col-6 usersChart mb-2'>
             <div className='container-fluid m-0 p-0'>
                <div className='row m-0 p-0'>
                  <div className='col-12 m-0 usersChartInner shadow'>
                      <p className='mb-3 mx-2' style={{fontSize:'22px'}}>Total Users</p>  
                      <ReactApexChart options={StockChartOptions2} series={stockSeries2} type="donut" height={350} />
                  </div>  
                </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default AdminDashboard