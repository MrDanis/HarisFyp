import React from 'react'
import './footer.css'
export default function Footer({children}) {
    return (
      <>
       {children}
        <div className='container-fluid footerContainer'>
        <div className='row footerRow py-3'>
          <div className='col-12 col-md-6 col-lg-3 footerColumn footerFirstDiv'>
            <img className='mb-2'src=''alt=''></img>
            <p className='text-start'>
               We are provideing best quality food with the lowest price and on easy terms
               and conditions so people could buy easily anything.
            </p>
          </div>
          <div className='col-12 col-md-6 col-lg-3 footerColumn'>
          <h5>About Us</h5>
          <p className='mb-1'>Online Shoping</p>
          <p className='mb-1'>Hot Offers</p>
          <p className='mb-1'>Easy Payment Plans</p>
          </div>
          <div className='col-12 col-md-6 col-lg-3 footerColumn'>
          <h5 className='mb-2'>Services</h5>
          <p className='mb-1'>Online Shoping</p>
          <p className='mb-1'>Hot Offers</p>
          <p className='mb-1'>Easy Payment Plans</p>
          </div>
          <div className='col-12 col-md-6 col-lg-3 footerColumn'>
          <h5>Location</h5>
          <p className='mb-1'>455 West Orchard Street Kings</p>
          <p className='mb-1'>Phone: +8 (123) 985789</p>
          <p className='mb-1'>Email: metax@gmail.com</p>
          </div>
          <div className='col-12 mt-4 d-flex justify-content-center align-items-center flex-direction-row'>
              <i class="footerLinkSocialIcons1 mx-3 fab fa-youtube "></i>
              <i class="footerLinkSocialIcons2 mx-3 fab fa-linkedin"></i>
              <i class="footerLinkSocialIcons3 mx-3 fab fa-twitter"></i>
              <i class="footerLinkSocialIcons4 mx-3 fab fa-telegram-plane"></i>
          </div>
        </div>
    </div>
    </>
    )
}
