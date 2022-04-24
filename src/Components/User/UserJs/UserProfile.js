import React, { useState } from 'react'
import '../UserCSS/UserprofileSidebar.css'
const UserProfile=()=> {
  const [showUpdateProfileMenu,setshowUpdateProfileMenu ]=useState(false);
  const [imageUrl,setImageUrl]=useState('/cheeta.jpg');
  const showUpdateMenu =(n)=>{
    switch (n) {
      case 1:
        setshowUpdateProfileMenu(true);
      break;
      case 2:
        setshowUpdateProfileMenu(false);
      break;
      default:
      break;
    }
    
  }
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0'>
          {/* User Profile SideBar Start*/}
          <div className='col-12 col-sm-4 col-md-3 col-lg-2 m-0 p-2 shadow mainUserProfileSidebar' >
           <div className='row m-0 p-0 '>
               <div className='col-12 m-0 p-0'>
                <ul className="userProfilesidebarList mb-0 p-0">
                  <li className='d-flex justify-content-center align-items-center'>
                    <img className='mb-3 img-fluid userProfileImage' src='/cheeta.jpg' alt=''></img>
                  </li>
                  <li>
                    <label className='fw-bold'>Name</label>
                    <p>Max Oxmal</p>
                  </li>
                  <li>
                    <label className='fw-bold'>Email</label>
                    <p>someone@gmail.com</p>
                  </li>
                  <li>
                    <label className='fw-bold'>CNIC#</label>
                    <p>12345-2341234-9</p>
                  </li>
                  <li>
                    <label className='fw-bold'>Address</label>
                    <p className='text-justify userHouseAddress'>House#QAAB/4,Street#192<br></br>City:Virgin,London</p>
                  </li>
                  <li>
                    <label className='fw-bold'>Contact No</label>
                    <p>+32-4352123</p>
                  </li>
                  <li className=' m-0 py-1 d-flex justify-content-center align-items-center'>
                      <button className='btn btn-success rounded-pill shadow w-75' onClick={()=>{showUpdateMenu(1)}}>
                           Edit Profile
                      </button>
                  </li>
                </ul>
               </div>
           </div>       
          </div>
          {/* User Profile SideBar End*/}
            {/* User profile update Portion Start*/}
          <div className='col-12 col-sm-8 col-md-9 col-lg-10 m-0 p-0' >
               {
                 showUpdateProfileMenu?
                 <>
                 <div className='container-fluid m-0 p-2'>
                   <div className='row m-0 p-0 d-flex justify-content-center'>
                     <div className='col-12 col-md-6 m-0 p-3 uploadProfileImageBox'>
                        {/* To set the image */}
                        <div className='box w-50'>
                        <img className='img-fluid updateUserProfileImage w-100' src={imageUrl} alt='not working'></img>
                        <input className='w-100 mt-1' type="file" onChange={(event)=>{setImageUrl(URL.createObjectURL(event.target.files[0]));}}>
                        </input>
                        </div>
                     </div>
                     <div className='col-12 col-md-6 m-0 p-3  uplaodNameBox'>
                        {/* To set the name */}
                       <label className='userNamelabel'>
                         Enter New Name  
                       </label>
                       <input placeholder='Enter New Name'></input>
                     </div>

                     <div className='col-12 col-md-6 m-0 p-3 uploadProfileImageBox'>
                        {/* To set the name */}
                        <div className='box w-50'>
                        <label className='userNamelabel'>
                         Enter New Email  
                       </label>
                       <input placeholder='Enter New Email'></input>
                      </div>
                     </div>

                     <div className='col-12 col-md-6 m-0 p-3 uplaodNameBox'>
                        {/* To set the name */}
                       <label className='userNamelabel'>
                         Enter New CNIC#  
                       </label>
                       <input placeholder='Enter New CNIC'></input>
                     </div>

                     <div className='col-12 col-md-6 m-0 p-3 uploadProfileImageBox'>
                        {/* To set the name */}
                        <div className='box w-50'>
                        <label className='userNamelabel'>
                         Enter New Address  
                       </label>
                       <input placeholder='Enter New Address'></input>
                      </div>
                     </div>
                     <div className='col-12 col-md-6 m-0 p-3 uplaodNameBox'>
                        {/* To set the name */}
                       <label className='userNamelabel'>
                         Enter New Contact Number  
                       </label>
                       <input placeholder='Enter New Conatct#'></input>
                     </div>
                     <div className='col-6 mt-3 py-3'>
                        <button className='btn btn-success rounded-pill shadow UpdateUserprofileBtn' onClick={()=>{showUpdateMenu(2)}}>
                          Update
                        </button>
                     </div>
                   </div>
                 </div>  
                </>
                :null

               } 
          </div>
          {/* User profile update Portion End*/}
      </div>
    </div>
  )
}
export default UserProfile