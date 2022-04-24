import React, { useState } from 'react'

const PresonalInformationForm=({callBackFromParent})=> {
  // const data = "This is data from Child Component to the Parent Component."
  const [childDataName,setchildDataName] = useState('');
  const [childHomeData,setchildHomeData] = useState('');
  const [childCnicData,setchildCnicData] = useState('');
  //Settings states for the user is start
  const changeInputName=(e)=>{
    setchildDataName(e.target.value);
   }
   const changeInputHome=(e)=>{
    setchildHomeData(e.target.value);
   }
   const changeInputCnic=(e)=>{
    setchildCnicData(e.target.value);
   }
   //Settings states for the user is end
   //Function for sending the data to the parents
   const grabAllUserInfoandSendToParent=()=>{
     var userData =`${childDataName}*${childHomeData}*${childCnicData}`;
     callBackFromParent(userData);
   }
   //Function for sending the data to the parents End
  
  return (
    <div className='container-fluid m-0 p-3'>
     <div className='row m-0 px-3'>
      <label className='mb-1 m-0 p-0 personalDataInfoLabels'>Name</label>
      <input className='mb-2' onChange={(e)=>{changeInputName(e)}}></input>
      <label className='mb-1 m-0 p-0 personalDataInfoLabels'>Email Address</label>
      <input className='mb-2' onChange={(e)=>{changeInputHome(e)}}></input>
      <label className='mb-1 m-0 p-0 personalDataInfoLabels'>CNIC#</label>
      <input className='mb-2' onChange={(e)=>{changeInputCnic(e)}}></input>
      <button className='btn btn-success savePersonalDataBtn mt-2' onClick={()=>{grabAllUserInfoandSendToParent()}}> Save </button>
     </div>
    </div>
  )
}

export default PresonalInformationForm