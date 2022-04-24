import React, { useEffect, useState } from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';
const ShoppingCartBill=(props)=> {
  const [billArray,setbillArray]= useState();
  
  useEffect(()=>{
    setbillArray(props.dataShare);
    console.log(billArray);
  },[props.dataShare,billArray]);
  // console.log(billArray);
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 py-3 px-2 p-0'>
        <div className='row m-0 p-0 shadow'>
          <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
           <h3>Bill Summary</h3>
          </div>
          <div className='col-12 m-0 p-0'>
           <table class="table table-borderless  m-0 p-0">
              <thead>
                <tr>
                  <th className='text-center'>Name</th>
                  <th className='text-center'>Units</th>
                  <th className='text-center'>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                   billArray.map((item,index)=> 
                   <tr key={index}>
                     <td className='text-center'>{item.id}</td>
                     <td className='text-center'>{item.count}</td>
                     <td className='text-center'>{item.totalIndividualPrice}</td>
                   </tr> 
                   )
               }
                <tr>
                  <td className='p-0' colSpan={3}>
                   <p className='py-2 fw-bold mb-1 m-0 text-center'> Totall Ammount : 
                   <span> {props.grandTotallValue}</span>
                   </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-12 m-0 p-0 d-flex justify-content-center'>
            <Link to='/PaymentProcess' className='m-0 w-100 btn btn-success'>
               Pay now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartBill