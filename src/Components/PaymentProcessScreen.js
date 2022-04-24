import React, { useCallback } from 'react'
import './PaymentProcessScreenDesign.css'
import PresonalInformationForm from './PresonalInformationForm'
import ShippingInformationForm from './ShippingInformationForm'
import PaymentMethodForm from './PaymentMethodForm'
import OrderComfirmation from './OrderComfirmation'
import { useState } from 'react'
import { Link }  from 'react-router-dom'
//All the business logic and component randering will be done here
const PaymentProcessScreen=()=>{
   // defining 4 states for the shipping process
 const [personalInfo,setpersonalInfo]= useState('','','');
 const [shippingInfo,setshippingInfo]= useState('');
 const [personalInfo3,setpersonalInfo3]= useState('');
 const [personalInfo4,setpersonalInfo4]= useState('');
 const [formCount,setformCount] = useState(1);
 const gotoNextForm = ()=>{
     if(formCount>=4)
     {
        return;
     }
     else
     {
        setformCount(formCount+1);
     }
 }
 const gotoPreviousForm = ()=>{
    if(formCount<=1)
    {
       return;
    }
    else
    {
       setformCount(formCount-1);
    }
}
 const callback = useCallback((personalInfo)=>{
    setpersonalInfo(personalInfo);
 },
 []);
// Shipping info Work
const callbackShippingInfo = useCallback((shippingInfo)=>{
   setshippingInfo(shippingInfo);
},
[]);

  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0 d-flex justify-content-center align-tems-center'>
          <div className='container w-50 my-4 p-3 d-flex align-tems-center justify-content-center paymentProcessMainContainer'>
              <div className='row w-75 m-0 p-0'>
                  {/* Shipping Process Navigation Start */}
                  <div className='col-12 m-0 p-0'>
                      <div className='row m-0 mb-5 p-0 shadow'>
                       <div className={formCount===1?'col-3 m-0 py-2 personalInformationBox coloredNavigationBox':'col-3 m-0 py-2 personalInformationBox SimplecoloredNavigationBox'}>
                         <span className='PersonalInformationHeading'>
                            Personal Info
                         </span>   
                       </div> 
                       
                       <div className={formCount===2?'col-3 m-0 py-2 navigationBox coloredNavigationBox':formCount>=2?'col-3 m-0 py-2 navigationBox SimplecoloredNavigationBox':'col-3 m-0 py-2 navigationBox'}>
                         <span className='ShippingInfoHeading'>
                            Shipping Info
                         </span>
                       </div>
                       <div className={formCount===3?'col-3 m-0 py-2 navigationBox coloredNavigationBox':formCount>=3?'col-3 m-0 py-2 navigationBox SimplecoloredNavigationBox':'col-3 m-0 py-2 navigationBox'}>
                         <span className='PaymentMethodHeading'>
                            Payment Method
                         </span>    
                       </div> 
                       <div className={formCount===4?'col-3 m-0 py-2 navigationBox SimplecoloredNavigationBox':formCount>=4?'col-3 m-0 py-2 navigationBox SimplecoloredNavigationBox':'col-3 m-0 py-2 navigationBox'}>
                         <span className='OrderConfirmationHeading'>
                            Confirm Order
                         </span>
                       </div>
                      </div>
                  </div>
                  {/* Shipping Process Navigation End */}
                  {/* Shipping Form Start*/}
                   <div className='col-12 m-0 p-0 bg-white text-dark shadow FormsMainBox'>
                       {/* Form ComponentsRow Start*/}
                       <span>{personalInfo}</span>
                       <br></br>
                       <span>{shippingInfo}</span>
                        <div className='row m-0 p-0'>
                            {formCount===1?<PresonalInformationForm callBackFromParent={callback} ></PresonalInformationForm>:null}
                            {formCount===2?<ShippingInformationForm callBackFromParent={callbackShippingInfo}></ShippingInformationForm>:null}
                            {formCount===3?<PaymentMethodForm></PaymentMethodForm>:null}
                            {formCount===4?<OrderComfirmation></OrderComfirmation>:null}
                        </div>
                      {/* Form Component row End */}
                      {/* Next and Previus Form Button Start */}
                        <div className='row m-0 py-3'>
                         <div className='col-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                             {
                              formCount===1? 
                             <Link to='/ShopingCart' className='m-0 p-0 w-50'>
                              <button className='w-100 btn bg-light rounded-pill shadow'onClick={()=>{gotoPreviousForm()}}>Cancel</button>
                              </Link>:null
                             }
                             {
                                formCount>1? 
                               <button className='m-0 w-50 btn bg-light rounded-pill shadow'onClick={()=>{gotoPreviousForm()}}>Back</button>:null
                             }
                             
                         </div>
                         <div className='col-6 m-0 p-0 d-flex justify-content-center align-items-center'>
                           {    formCount<4?
                               <button className='w-25 btn btn-success rounded-pill shadow'onClick={()=>{gotoNextForm()}}>Next</button>:null
                           }
                           {
                                formCount===4? 
                               <button className='m-0 w-50 btn bg-success rounded-pill shadow' style={{color:'white'}}onClick={()=>{gotoPreviousForm()}}>Confirm</button>:null
                             }
                           </div>
                         
                        </div>
                      {/* Next and Previus Form Button End */}
                   </div>
                  {/* Shipping Form End*/}
              </div>
         </div>
      </div>
  </div>
)}

export default PaymentProcessScreen