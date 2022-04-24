import React, { useEffect, useState } from 'react'
import ShoppingCartBill from './ShoppingCartBill'
import './ShoppingCart.css'
const ShoppingCartSidebar=()=> {
    // const numberCount=[];
    const [numberCount,setNumberCount] =useState([]);
    const [grandTotall,setgrandTotall] = useState(0);
    useEffect(()=>{
        const cartItemsArray = [
          {
            id:1,
            count:0,
            unitPrice:10,
            totalIndividualPrice:0 
          },
          {
            id:2,
            count:0,
            unitPrice:10,
            totalIndividualPrice:0   
          },
          {
            id:3,
            count:0,
            unitPrice:10,
            totalIndividualPrice:0   
          },
          {
            id:4,
            count:0,
            unitPrice:10,
            totalIndividualPrice:0   
          },
          {
            id:5,
            count:0,
            unitPrice:10,
            totalIndividualPrice:0   
          }
        ];
        setNumberCount(cartItemsArray);
    },[]);
    const ChangeSpecific=(type,n,index)=>{
        switch (type) {
            case 1:
              //Algo of Increasing the Quantity of the Selected Cart Item
              //Step 1 Make a shallow Copy of the array
              let coppyArray = [...numberCount];
              //Step 2 Make the copy of the object need to be Updated
              let copyObject = [coppyArray[index.id-1]];
              //Step 3 Update the properties of the object
              copyObject[0].count=copyObject[0].count+n;
              copyObject[0].totalIndividualPrice=copyObject[0].unitPrice*copyObject[0].count;
              //Step 5 Update the orignal Sate
              //Calling a function from a function
              // console.log(copyObject[0].totalIndividualPrice);
              calculateGrandTotall(coppyArray)
               setNumberCount(coppyArray);
               
              //  console.log(coppyArray);
            break;
            case 2:
              //Algo of Decreasing the Quantity of the Selected Cart Item
              //Step 1 Make a shallow Copy of the array
              // alert('i am called');
              let coppyDecrementArray = [...numberCount];
              //Step 2 Make the copy of the object need to be Updated
              let copyDecrementObject = [coppyDecrementArray[index.id-1]];
              //Step 3 Update the property of the object
              if(copyDecrementObject[0].count>1){
                 copyDecrementObject[0].count=copyDecrementObject[0].count-n;
                 setNumberCount(coppyDecrementArray);
                 calculateGrandTotall2(coppyDecrementArray);
                }
                else
                {
                 return alert(' Quantity can not be lowewred more');
               }
            
              //Step 5 Update the orignal Sate
            break;
            default:
                break;
        }
    } 
   function calculateGrandTotall(params) {
     let totallAmount=0;
    for (let index = 0; index < params.length; index++) {
      // console.log(params[index].totalIndividualPrice);
         totallAmount = totallAmount+params[index].totalIndividualPrice;
      
    }
    // console.log('============')
    // console.log(totallAmount);
   setgrandTotall(totallAmount)
    //  alert('I am child and data recieve from the parents are '+params)
   }
   function calculateGrandTotall2(params) {
    let totallAmount=0;
    console.log(params);
   for (let index = 0; index < params.length; index++) {
     console.log(params[index].totalIndividualPrice);
     totallAmount = (totallAmount+(params[index].count*params[index].unitPrice));
   }
   console.log('Amount after reducing the quantity'+totallAmount)
  //  console.log('============')
  //  console.log(totallAmount);
     setgrandTotall(totallAmount)
   //  alert('I am child and data recieve from the parents are '+params)
  }
  return (
    <div className='row m-0 p-0'> 
    <div className='col-12 col-md-8 col-lg-9 m-0 p-3 CartDataColumn'>
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0'>
        <div className='container-fluid m-0 p-0'>
          {/* {
            numberCount.map((item,index)=><>
             <div className='row mb-2 m-0 p-0 shadow d-flex justify-content-space-around'>          
             <div className='col-3 m-0 p-0' style={{dispaly:'flex',flexDirection:'column'}}>
                <img className='img-fluid m-0 p-0' src='/WaterMelonAi.png'alt=''></img>
             </div>
             <div className='col-2 m-0 p-0 d-flex justify-content-center align-items-center'>
                {
                  item.count
                }   
             </div>
             <div className='col-2 m-0 p-0 d-flex justify-content-center align-items-center'>
                {
                   item.unitPrice
                }   
             </div>
             <div className='col-2 m-0 p-0 d-flex justify-content-center align-items-center'>
                {
                  item.totalIndividualPrice
                }
             </div>
             <div className='col-2 m-0 p-0 d-flex justify-content-center align-items-center'>
               
                <div className="m-0 p-0 w-25 btn-group" role="group" aria-label="Basic example" style={{flexDirection:'row'}}>
                <button type="button" className="btn btn btn-danger" onClick={()=>{ChangeSpecific(2,1,item)}}>
                <i class="fas fa-minus"></i>
                </button>
                <button type="button" className="btn ">
                {
                  item.count
                }
                </button>
                <button type="button" className="btn btn-success" onClick={()=>{ChangeSpecific(1,1,item)}}>
                <i class="fas fa-plus"></i>
                </button>
                </div>   
             </div>
            </div>
            </>)
          } */}
          
           
        </div>
        
      </div> 
    </div> 
  </div>
   {/* For Children */}
   <div className='col-12 col-md-4 col-lg-3 m-0 p-0'>
      <ShoppingCartBill 
        grandTotallValue={grandTotall}
        dataShare={numberCount}
      ></ShoppingCartBill>
   </div>
 </div>
  )
}

export default ShoppingCartSidebar