import React, { useState } from 'react'
import ReactStars from 'react-stars';
import ShopeBody from './ShopeBody';
import './ShopeScreen.css'
const ShopeSideBar=()=> {
    const [filter,setfilter]=useState(0);
    const changeFilterState =(n)=>{
      switch (n) {
          case 1:
            setfilter(1);
          break;
          case 2:
            setfilter(2);
          break;
          case 3:
            setfilter(3);  
          break;
          default:
              break;
      }
    }
  return (
     <div className='container-fluid m-0 p-0'>
         <div className='row m-0 p-0'>
         <div className='col-5 col-sm-4 col-md-3 col-lg-2 m-0 p-0 shadow mainDivRow' style={{border:'0px solid green'}}>
                <div className='container-fluid m-0 p-0'>
                    <div className='row m-0 p-0'>
                         <div className='col-12 m-0 p-0'>
                             <h1 className='m-0 text-center py-3' style={{fontSize:'22px'}}>Filter Selection</h1>
                         </div>
                         {/* Filter 1 div Start*/}
                         <div className='col-12 mt-3 pb-2 mainNameFilterBox'>
                           <div className='row m-0 p-0'>
                              <div className='col-12 m-0 p-0'>
                                 <h4 className='m-0 py-2 p-0' style={{border:'0px solid red',fontSize:'18px',fontWeight:500}}>
                                  Name
                                 </h4>
                              </div>
                           </div>
                           <div className='row mb-2 m-0 p-0'>
                              <div className='col-12 m-0 p-0'>
                                   <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
                                        <label className="btn mx-2 btn-outline-success" for="btnradio1">Fruits</label>
                                      
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                                        <label className="btn btn-outline-success" for="btnradio2">Vegetable</label>
                                   </div>
                              </div>
                           </div>
                           <div className='row mb-2 m-0 p-0'>
                              <div className='col-12 m-0 p-0'>
                                   <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
                                        <label className="btn mx-2 btn-outline-success" for="btnradio1">Wheat</label>
                                      
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                                        <label className="btn btn-outline-success" for="btnradio2">Rice</label>
                                   </div>
                              </div>
                           </div>
                           <div className='row mb-2 m-0 p-0'>
                              <div className='col-12 m-0 p-0'>
                                   <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group" onClick={()=>{changeFilterState(1)}}>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
                                        <label className="btn mx-2 btn-outline-success" for="btnradio1">Dry-Fruits</label>
                                   </div>
                              </div>
                           </div>
                         </div>
                         {/* Filter 1 div End*/}
                          {/* Filter 2 div Start*/}
                          <div className='col-12 m-0 p-0'>
                            <div className='row m-0 pb-2 priceFilerMostOuterRow'>
                              <div className='col-12 m-0 p-0'>
                                  <h4 className='px-1 py-2' style={{border:'0px solid red',fontSize:'18px'}}>
                                     Price
                                  </h4>
                              </div>
                              <div className='col-12 m-0 px-1 py-2 pricefilters'>
                                   <button className='w-30 mx-3 p-0 border priceStartBtn'>
                                     <input className='w-100 priceStartBtnInput'></input>  
                                   </button>
                                    to 
                                   <button className='w-30 mx-3 p-0 border priceStartBtn'>
                                   <input className='w-100 priceStartBtnInput'></input>  
                                   </button>   
                              </div>
                              <div className='col-12 m-0 pb-2 d-flex justify-content-center align-items-center'>
                                   <button onClick={()=>{changeFilterState(2)}} className=' mt-2 btn btn-success d-flex justify-content-center align-items-center shadow'>
                                      <i class="fas fa-play"></i>  
                                   </button>   
                              </div>
                            </div>
                         </div>
                         {/* Filter 2 div End*/}
                          {/* Filter 3 div Start*/}
                          <div className='col-12 m-0 p-0 ratingFilterSection'onClick={()=>{changeFilterState(3)}}>
                           <h4 className='px-1 py-2' style={{border:'0px solid red',fontSize:'18px'}}>
                              Rating
                           </h4>
                           <ReactStars className='px-1'
                            count={1}
                            value={1}
                            size={24}
                            color2={'#ffd700'}></ReactStars>
                            <ReactStars className='px-1'
                            count={2}
                            value={2}
                            size={24}
                            color2={'#ffd700'}></ReactStars>
                             <ReactStars className='px-1'
                            count={3}
                            value={3}
                            size={24}
                            color2={'#ffd700'}></ReactStars>
                              <ReactStars className='px-1'
                            count={4}
                            value={4}
                            size={24}
                            color2={'#ffd700'}></ReactStars>
                              <ReactStars className='px-1'
                            count={5}
                            value={5}
                            size={24}
                            color2={'#ffd700'}></ReactStars>
                         </div>
                         {/* Filter 3 div End*/}
                    </div>
                </div>
            </div>           
 
            {/* Childern should be place here below */}
            { filter===0?<ShopeBody filter='none'></ShopeBody>:null }
            { filter===1?<ShopeBody filter='catagorey'></ShopeBody>:null }
            { filter===2?<ShopeBody filter='price'></ShopeBody>:null }
            { filter===3?<ShopeBody filter='rating'></ShopeBody>:null }
         </div>
     </div>
    
  )
}

export default ShopeSideBar