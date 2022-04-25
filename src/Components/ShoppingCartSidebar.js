import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartBill from './ShoppingCartBill'
import './ShoppingCart.css'
const ShoppingCartSidebar=()=> {
    // const numberCount=[];
    const [numberCount,setNumberCount] =useState([]);
    const [grandTotall,setgrandTotall] = useState(0);
    const [refresh ,setrefresh]=useState(false)
    const [removeIt,setRemoveIt] =useState({removeStatus:false,removeItemId:-1});
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
        // alert('i am called after the change in dependency array');
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
    const removeCurrentOne=(id)=>{
       console.log(id);
       let index = numberCount.indexOf(id);
       numberCount.splice(index,1);
       console.log(index);
       console.log(numberCount);
       //setNumberCount(numberCount);
      //  setRemoveIt(true);
       if(refresh)
       setrefresh(false)
       else
       setrefresh(true)


    }
   function calculateGrandTotall(params) {
     let totallAmount=0;
    for (let index = 0; index < params.length; index++) {
         totallAmount = totallAmount+params[index].totalIndividualPrice;  
    }
    setgrandTotall(totallAmount)
   }
   function calculateGrandTotall2(params) {
    let totallAmount=0;
    console.log(params);
   for (let index = 0; index < params.length; index++) {
     console.log(params[index].totalIndividualPrice);
     totallAmount = (totallAmount+(params[index].count*params[index].unitPrice));
   }
   console.log('Amount after reducing the quantity'+totallAmount)
     setgrandTotall(totallAmount) 
  }
  return (
    <div className='row m-0 p-0'> 
    <div className='col-12 col-md-8 col-lg-9 m-0 p-3 CartDataColumn'>
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0'>
        <div className='container-fluid m-0 p-0'>
          {
            numberCount.length!==0?
            numberCount.map((item,index)=><>

             <div className='row mb-2 m-0 p-0 shadow d-flex justify-content-space-around'>          
             <div className='col-3 m-0 p-0 d-flex flex-column justify-content-center' style={{flexDirection:'row'}}>
                <img className='img-fluid m-0 p-0' src='/WaterMelonAi.png'alt=''></img>
                <button className='btn btn-danger mx-2 mb-3' onClick={()=>{removeCurrentOne(item)}}>Remove {item.id}</button>
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
            </>):
            <div className='container-fluid m-0 p-0'style={{height:'100vh'}}>
              <div className='row m-0 p-0 d-flex justify-content-center align-items-center'style={{height:'100%'}}>
                  <Link to={'/'} className='btn btn-success p-3 w-25 ' >Go to Shop</Link>
              </div>
            </div>
          }
          
           
        </div>
        
      </div> 
    </div> 
  </div>
   {/* For Children */}
   <div className='col-12 col-md-4 col-lg-3 m-0 p-0'>
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
                   numberCount.map((item,index)=> 
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
                   <span> {grandTotall}</span>
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
      {/* <ShoppingCartBill 
        grandTotallValue={grandTotall}
        dataShare={numberCount}
      ></ShoppingCartBill> */}
   </div>
 </div>
  )
}

export default ShoppingCartSidebar