import React, { useState } from 'react'

const ShippingInformationForm=({callBackFromParent})=> {
  const [shippingHomeData,setshippingHomeData]=useState('');
  const [shippingAddressData,setshippingAddressHomeData]=useState('');
  const [shippingAddressConfirmData,setshippingAddressConfirmData]=useState('');
  //Getting the data from the user for the shipping
  const changeShippinghome=(e)=>{
           setshippingHomeData(e.target.value);
  }
  const changeShippingaddress=(e)=>{
    setshippingAddressHomeData(e.target.value);
  }
  const changeShippingconfirm=(e)=>{
    setshippingAddressConfirmData(e.target.value);
  }
  //Getting the data from the user for the shipping Ends callBackFromParent(shippingData)
  // Sending the shipping data to the parents
  const sendShippingDatatoTheParents=()=>{
    var customerShippingData = `${shippingHomeData}*${shippingAddressData}*${shippingAddressConfirmData}`;
    callBackFromParent(customerShippingData);
  }
  return (
    <div className='container-fluid m-0 p-3'>
     <div className='row m-0 px-3'>
     <label className='mb-1 m-0 p-0 personalDataInfoLabels'>Home Address</label>
      <input className='mb-2' onChange={(e)=>{changeShippinghome(e)}}></input>
      <label className='mb-1 m-0 p-0 personalDataInfoLabels'>Shipping Address</label>
      <input className='mb-2' onChange={(e)=>{changeShippingaddress(e)}}></input>
      <label className='mb-1 m-0 p-0 personalDataInfoLabels'>Parmanent Address</label>
      <input className='mb-2' onChange={(e)=>{changeShippingconfirm(e)}}></input>
      <button className='btn btn-success savePersonalDataBtn mt-2' onClick={()=>{sendShippingDatatoTheParents()}}> Save </button>
     </div>
    </div>
  )
}

export default ShippingInformationForm