import React from 'react'
import ShopeSideBar from './ShopeSideBar';
import './ShopeScreen.css'
// import ShopeBody from './ShopeBody';
const ShopeScreen=()=> {
  return (
    <div className='container-fluid mb-2 p-0'>
      <div className='row m-0 p-0'>
          {/* Side bar for the finlers of Shope Start*/}

            <ShopeSideBar></ShopeSideBar>

          {/* Side bar for the filters of the shope End */}
          {/* Body of flter search of the shope start */}
            
          {/* Body of the filter for the shope is about to end */}
      </div>  
    </div>
  )
}

export default ShopeScreen