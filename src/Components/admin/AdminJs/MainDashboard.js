import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import NewProduct from './NewProduct'
import ViewAllProducts from './ViewAllProducts'
import NewCatagorey from './NewCatagorey'
import ViewCatagorey from './ViewCatagorey'
// We will use the use effect to check weather admin
// or seller is login
function MainDashboard(props) {
  return (
    <div className='container-fluid m-0 p-0' style={{border:'0px solid red'}}>
    <div className='row m-0 p-0' style={{border:'0px solid green'}}>
      <div className='col-1 col-sm-4 col-md-3 col-xl-2 m-0 p-0 bg-dark'>
          <AdminSidebar></AdminSidebar>
      </div>
      <div className='col-11 col-sm-8 col-md-9 col-xl-10' style={{border:'0px solid blue'}}>
         {props.pageShow==='home'?<AdminDashboard></AdminDashboard>:null}
         {props.pageShow==='addProduct'?<NewProduct></NewProduct>:null}
         {props.pageShow==='viewProduct'?<ViewAllProducts></ViewAllProducts>:null}
         {props.pageShow==='addCatagorey'?<NewCatagorey></NewCatagorey>:null}
         {props.pageShow==='viewCatagorey'?<ViewCatagorey></ViewCatagorey>:null}
          
      </div>
    </div>
    </div>
  )
}

export default MainDashboard