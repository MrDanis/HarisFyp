import React from 'react'
import '../AdminCss/AdminSidebar.css'
import {Link} from 'react-router-dom'
function AdminSidebar() {
  return (
    <div classNameName='container-fluid m-0 py-2'>
     <div classNameName='row m-0 p-0 d-flex flex-column'>
      <div classNameName='col-12 m-0 p-0 text-align-center'>
      <img className='img-fluid adminImg mt-3' src='/Cheeta.jpg' alt='please show' ></img>
       <p className='fs-6 text-light mt-2 mx-3'>Menu</p>
         <ul className='adminMenuList m-0 p-0'>
             <li className='myAdminCustomLink w-100 m-0 py-3'>
                <Link className='m-0 px-3 d-none d-sm-block adminLinks' to="/Admin/Dashboard">
                <i class="fa-solid fa-desktop"></i> 
                <span className='fw-normal px-2'>Dashboard</span>   
                </Link>
                <Link className='m-0 p-0 d-block d-sm-none adminLinks w-100 d-flex justify-content-center align-items-center' to="/Admin/Dashboard">
                <i class="fa-solid fa-desktop"></i> 
                </Link>
             </li>
             <li className='myAdminCustomLink w-100 m-0 py-3'>
                <Link className='m-0 px-3 d-none d-sm-block adminLinks'
                to="/Admin/Dashboard">
                <a className="adminSubmenu" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <i class="fal fa-images"></i>
                <span className='fw-normal px-2'>Catagorey</span>
                <i class="fas fa-caret-down"></i>
                </a>
                <div class="collapse" id="collapseExample">
                    <ul className='adminMenuList pl-2 m-0'>
                         <li className='myAdminCustomLink'>
                            
                             <Link className='fw-normal adminSubLinks my-4' to={'/admin/addCatagorey'}>
                               <i class="fal fa-layer-plus mx-2"></i>
                               Add New
                              </Link>
                         </li>
                         <li>
                             <Link className='fw-normal adminSubLinks my-4' to={'/admin/viewCatagorey'}>
                               <i class="fal fa-border-all mx-2"></i>
                               View all
                             </Link>
                         </li>
                     </ul>
                </div>
                </Link>
                <Link className='m-0 p-0 d-block w-100 d-sm-none adminLinks d-flex justify-content-center align-items-center' to="/Admin/Dashboard">
                <i class="fal fa-images"></i>
                </Link>
             </li>
             {/* Links for products Start */}
             <li className='myAdminCustomLink w-100 m-0 py-3'>
                <Link className='m-0 px-3 d-none d-sm-block adminLinks'
                to="/Admin/Dashboard">
                <a className="adminSubmenu" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                <i class="fal fa-layer-group"></i>
                <span className='fw-normal px-2'>Products</span>
                <i class="fas fa-caret-down"></i>
                </a>
                <div class="collapse" id="collapseExample2">
                    <ul className='adminMenuList pl-2 m-0'>
                         <li className='myAdminCustomLink'>
                            
                             <Link className='fw-normal adminSubLinks my-4' to={'/admin/addNewProduct'}>
                               <i class="fal fa-layer-plus mx-2"></i>
                               Add New
                              </Link>
                         </li>
                         <li>
                             <Link className='fw-normal adminSubLinks my-4' to={'/admin/viewProduct'}>
                               <i class="fal fa-border-all mx-2"></i>
                               View all
                             </Link>
                         </li>
                     </ul>
                </div>
                </Link>
                <Link className='m-0 p-0 d-block w-100 d-sm-none adminLinks d-flex justify-content-center align-items-center' to="/Admin/Dashboard">
                <i class="fal fa-layer-group"></i> 
                </Link>
             </li>
             {/* Links for products End */}
            {/* for new copuns start */}
            <li className='myAdminCustomLink w-100 m-0 py-3'>
                <Link className='m-0 px-3 d-none d-sm-block adminLinks'
                to="/Admin/Dashboard">
                <a className="adminSubmenu" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                <i class="fal fa-address-card"></i>
                <span className='fw-normal px-2'>Copuns</span>
                <i class="fas fa-caret-down"></i>
                </a>
                <div class="collapse" id="collapseExample3">
                    <ul className='adminMenuList pl-2 m-0'>
                         <li className='myAdminCustomLink'>                            
                             <Link className='fw-normal adminSubLinks my-4' to={''}>
                               <i class="fal fa-layer-plus mx-2"></i>
                               Manage
                              </Link>
                         </li>
                         <li>
                             <Link className='fw-normal adminSubLinks my-4' to={''}>
                               <i class="fal fa-border-all mx-2"></i>
                               Add
                             </Link>
                         </li>
                     </ul>
                </div>
                </Link>
                <Link className='m-0 p-0 d-block w-100 d-sm-none adminLinks d-flex justify-content-center align-items-center' to="/Admin/Dashboard">
                <i class="fal fa-address-card"></i> 
                </Link>
             </li>
            {/* For new copuns End */}
             <li className='myAdminCustomLink w-100 m-0 px-0 py-3'>
                <Link className='m-0 px-3 d-none d-sm-block adminLinks' to="/Admin/Dashboard">
                <i class="far fa-users"></i>
                <span className='fw-normal px-2'>Users</span>   
                </Link>
                <Link className='m-0 p-0 d-block d-sm-none adminLinks w-100 d-flex justify-content-center align-items-center' to="/Admin/Dashboard">
                <i class="far fa-users"></i>
                </Link>
             </li>
             <li className='myAdminCustomLink w-100 m-0 px-0 py-3'>
                <Link className='m-0 px-3 d-none d-sm-block adminLinks' to="/Admin/Dashboard">
                <i class="fal fa-user-chart"></i>
                <span className='fw-normal px-2'>Orders</span>   
                </Link>
                <Link className='m-0 p-0 d-block d-sm-none adminLinks w-100 d-flex justify-content-center align-items-center' to="/Admin/Dashboard">
                <i class="fal fa-user-chart"></i>
                </Link>
             </li>
             <li className='myAdminCustomLink w-100 m-0 px-0 py-3'>
                <Link className='m-0 px-3 d-none d-sm-block adminLinks' to="/Admin/Dashboard">
                <i class="fal fa-chart-line"></i>
                <span className='fw-normal px-2'>Stock</span>   
                </Link>
                <Link className='m-0 p-0 d-block d-sm-none adminLinks w-100 d-flex justify-content-center align-items-center' to="/Admin/Dashboard">
                <i class="fal fa-chart-line"></i>
                </Link>
             </li> 
           </ul>
      </div>
     </div>
    </div>
  )
}

export default AdminSidebar