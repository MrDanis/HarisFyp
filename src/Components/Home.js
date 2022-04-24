import React,{useEffect,useState} from 'react'
import './Home.css'
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
SwiperCore.use([Autoplay,Pagination,Navigation]);
export default function Home() {
  const getSpecificProduct =(val)=>{
    var moveTo = document.createElement('a');
    moveTo.href=`${window.location.pathname}specific/${val}`;
    moveTo.click();
      //  alert(val);
       console.log(moveTo.href);
  }
  useEffect(()=>{
    console.log(window.innerWidth);
  },[])
    return (
        <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
         <div className='row' style={{border:'0px solid green',padding:'0px',margin:'0px'}}>
             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
             <Swiper style={{border:'0px solid black'}}
                     pagination={{ clickable: true }}
                    //  navigation
                     spaceBetween={50}
                     autoplay={{
                       "delay": 5000,
                       "disableOnInteraction": false
                     }}
                     slidesPerView={1}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                   >
                   <SwiperSlide style={{border:'0px solid red'}}>
                       <img className='img-fluid' src='/riceWall.png' alt='get work' style={{height:'70vh',width:'100%'}}>
                       </img>
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red'}}>
                   <img className='img-fluid' src='/fruitsWall.png' alt='get work' style={{height:'70vh',width:'100%'}}>
                       </img>
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red'}}>
                   <img className='img-fluid' src='/vegeWall.png' alt='get work' style={{height:'70vh',width:'100%'}}>
                       </img>
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red'}}>
                   <img className='img-fluid' src='/wheatWall.png' alt='get work' style={{height:'70vh',width:'100%'}}>
                       </img>
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red'}}>
                   <img className='img-fluid' src='/dryFruitWall.png' alt='get work' style={{height:'70vh',width:'100%'}}>
                       </img>
                   </SwiperSlide>
                 </Swiper>
             </div>
             {/* Styling of the fruits start */}
             <div className='row' style={{padding:'20px 0px 0px 0px',margin:'0px',border:'0px solid red'}}>
              <div className='col-12 shadow' style={{background: 'linear-gradient(to right, #8CC63F, #ffffff)',padding:'10px 0px 10px 10px',margin:'0px 0px 10px 0px',display:'flex'}}>
                <span style={{margin:'0px',padding:'0px',color:'white',fontSize:'32px',display:'inline-block'}}>
                    Fresh-Fruits
                </span>
              </div>
              <div className='row' style={{border:'0px solid black',padding:'0px',margin:'0px'}}>
              <div className='col-2' style={{border:'0px solid blue',padding:'2px',margin:'0px'}}>
                
                  <div className="card" style={{border:'0px solid red',height:'100%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.77)'}}>
                                 <img className="card-img-top" src="/FruitsCat.png" style={{height:'100%',borderRadius:'0px'}}></img>
                               
                                 </div>
              </div>    
              <div className='col-10' style={{border:'0px solid orangered',padding:'0px',margin:'0px'}}>
              <Swiper style={{border:'0px solid black'}}
                     spaceBetween={5}
                     pagination={{ clickable: true }}
                     slidesPerView={4}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                   >
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/AppleAi.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('0')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/BananaAI.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                 <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <Link to={'/'} className="btn btn-primary" onClick={()=>{getSpecificProduct('1')}} style={{marginBottom:'5px'}}>Product Detail</Link>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="/MangiAi.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('2')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                    </SwiperSlide>
                    <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                         <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                         <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                         <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                  <div className="card" style={{}}>
                                   <img className="card-img-top" src="/OrangeAi.png"></img>
                                   <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                     <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('3')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                     <a href="#" className="btn btn-success">Buy Now</a>
                                   </div>
                                   </div>
                         
                         </div>
                         </div>    
                         </div>         
                         </SwiperSlide>
                         <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="/StawbararyAi.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('4')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                          </SwiperSlide>
                          <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                               <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                               <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                               <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                        <div className="card" style={{cursor:'pointer'}}>
                                         <img className="card-img-top" src="/WaterMelonAi.png" style={{border:'0px solid black',margin:'0px',padding:'0px'}}></img>
                                         <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                           <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('5')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                           <a href="#" className="btn btn-success">Buy Now</a>
                                         </div>
                                         </div>
                               
                               </div>
                               </div>    
                               </div>         
                         </SwiperSlide>
                 </Swiper>
              </div>
            </div>
          </div>
             {/* This of the Fruits end */}
             {/* Styling of the Dry-Fruits start */}
             <div className='row' style={{padding:'20px 0px 0px 0px',margin:'0px',border:'0px solid red'}}>
              <div className='col-12 shadow' style={{background: 'linear-gradient(to right, #8CC63F, #ffffff)',padding:'10px 0px 10px 10px',margin:'0px 0px 10px 0px',display:'flex'}}>
                <span style={{margin:'0px',padding:'0px',color:'white',fontSize:'32px',display:'inline-block'}}>
                    Dry-Fruits
                </span>
              </div>
              <div className='row' style={{border:'0px solid black',padding:'0px',margin:'0px'}}>
              <div className='col-2'style={{border:'0px solid blue',padding:'2px',margin:'0px'}}>
                
                  <div className="card" style={{border:'0px solid red',height:'100%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.77)'}}>
                                 <img className="card-img-top" src="/mainDryFruitsImg-15.png" style={{height:'100%',borderRadius:'0px'}}></img>
                               
                                 </div>
              </div>    
              <div className='col-10' style={{border:'0px solid orangered',padding:'0px',margin:'0px'}}>
              <Swiper style={{border:'0px solid black'}}
                     spaceBetween={5}
                     pagination={{ clickable: true }}
                     //  navigation={true}
                     slidesPerView={4}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                   >
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/trasnsparentDryfruitsAllistrator-09.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('6')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/trasnsparentDryfruitsAllistrator-10.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('7')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

<div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
<div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
<div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
         <div className="card" style={{}}>
          <img className="card-img-top" src="/trasnsparentDryfruitsAllistrator-11.png"></img>
          <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
            
            <h5 className="card-title">Product Name</h5>
                    <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('8')}} style={{marginBottom:'5px'}}>Product Detail</a>
            <a href="#" className="btn btn-success">Buy Now</a>
          </div>
          </div>

</div>
</div>    
</div>         
</SwiperSlide>
<SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

<div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
<div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
<div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
         <div className="card" style={{}}>
          <img className="card-img-top" src="/trasnsparentDryfruitsAllistrator-12.png"></img>
          <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
            
            <h5 className="card-title">Product Name</h5>
                    <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('9')}} style={{marginBottom:'5px'}}>Product Detail</a>
            <a href="#" className="btn btn-success">Buy Now</a>
          </div>
          </div>

</div>
</div>    
</div>         
</SwiperSlide>
<SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

<div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
<div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
<div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
         <div className="card" style={{}}>
          <img className="card-img-top" src="/trasnsparentDryfruitsAllistrator-13.png"></img>
          <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
            
            <h5 className="card-title">Product Name</h5>
                    <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('10')}} style={{marginBottom:'5px'}}>Product Detail</a>
            <a href="#" className="btn btn-success">Buy Now</a>
          </div>
          </div>

</div>
</div>    
</div>         
</SwiperSlide>
         <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

<div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
<div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
<div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
         <div className="card" style={{}}>
          <img className="card-img-top" src="/trasnparentDryfruitsAllistrator-14.png"></img>
          <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
            
            <h5 className="card-title">Product Name</h5>
                    <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('11')}} style={{marginBottom:'5px'}}>Product Detail</a>
            <a href="#" className="btn btn-success">Buy Now</a>
          </div>
          </div>

</div>
</div>    
</div>         
</SwiperSlide>
                 </Swiper>
              </div>
            </div>
          </div>
             {/* This of the  Dry-Fruits end */}
             {/* Styling of the Rice start */}
             <div className='row' style={{padding:'20px 0px 0px 0px',margin:'0px',border:'0px solid red'}}>
              <div className='col-12 shadow' style={{background: 'linear-gradient(to right, #8CC63F, #ffffff)',padding:'10px 0px 10px 10px',margin:'0px 0px 10px 0px',display:'flex'}}>
                <span style={{margin:'0px',padding:'0px',color:'white',fontSize:'32px',display:'inline-block'}}>
                    Vegetables
                </span>
              </div>
              <div className='row' style={{border:'0px solid black',padding:'0px',margin:'0px'}}>
              <div className='col-2'style={{border:'0px solid blue',padding:'2px',margin:'0px'}}>
                
                  <div className="card" style={{border:'0px solid red',height:'100%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.77)'}}>
                                 <img className="card-img-top" src="/vegeMain-15.png" style={{height:'100%',borderRadius:'0px'}}></img>
                               
                                 </div>
              </div>    
              <div className='col-10' style={{border:'0px solid orangered',padding:'0px',margin:'0px'}}>
              <Swiper style={{border:'0px solid black'}}
                     spaceBetween={5}
                     pagination={{ clickable: true }}
                     //  navigation={true}
                     slidesPerView={4}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                   >
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/transparentVeg-09.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('12')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/transparentVeg-10.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                 <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('13')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="/transparentVeg-11.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('14')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                    </SwiperSlide>
                    <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                         <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                         <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                         <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                  <div className="card" style={{}}>
                                   <img className="card-img-top" src="/transparentVeg-12.png"></img>
                                   <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                     <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('15')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                     <a href="#" className="btn btn-success">Buy Now</a>
                                   </div>
                                   </div>
                         
                         </div>
                         </div>    
                         </div>         
                         </SwiperSlide>
                         <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="transparentVeg-13.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('16')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                          </SwiperSlide>
                          <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                               <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                               <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                               <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                        <div className="card" style={{cursor:'pointer'}}>
                                         <img className="card-img-top" src="/transparentVeg-14.png" style={{border:'0px solid black',margin:'0px',padding:'0px'}}></img>
                                         <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                           <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('17')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                           <a href="#" className="btn btn-success">Buy Now</a>
                                         </div>
                                         </div>
                               
                               </div>
                               </div>    
                               </div>         
                         </SwiperSlide>
                 </Swiper>
              </div>
            </div>
          </div>
             {/* This of the Rice end */}
             {/* Styling of the Wheat start */}
             <div className='row' style={{padding:'20px 0px 0px 0px',margin:'0px',border:'0px solid red'}}>
              <div className='col-12 shadow' style={{background: 'linear-gradient(to right, #8CC63F, #ffffff)',padding:'10px 0px 10px 10px',margin:'0px 0px 10px 0px',display:'flex'}}>
                <span style={{margin:'0px',padding:'0px',color:'white',fontSize:'32px',display:'inline-block'}}>
                    Wheat
                </span>
              </div>
              <div className='row' style={{border:'0px solid black',padding:'0px',margin:'0px'}}>
              <div className='col-2'style={{border:'0px solid blue',padding:'2px',margin:'0px'}}>
                
                  <div className="card" style={{border:'0px solid red',height:'100%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.77)'}}>
                                 <img className="card-img-top" src="/WheatMain-07.png" style={{height:'100%',borderRadius:'0px'}}></img>
                               
                                 </div>
              </div>    
              <div className='col-10' style={{border:'0px solid orangered',padding:'0px',margin:'0px'}}>
              <Swiper style={{border:'0px solid black'}}
                     spaceBetween={5}
                     pagination={{ clickable: true }}
                     //  navigation={true}
                     slidesPerView={4}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                   >
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/Wheat-01.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('18')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/Wheat-06.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                 <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('19')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="/Wheat-02.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('20')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                    </SwiperSlide>
                    <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                         <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                         <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                         <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                  <div className="card" style={{}}>
                                   <img className="card-img-top" src="/Wheat-03.png"></img>
                                   <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                     <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('21')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                     <a href="#" className="btn btn-success">Buy Now</a>
                                   </div>
                                   </div>
                         
                         </div>
                         </div>    
                         </div>         
                         </SwiperSlide>
                         <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="/Wheat-04.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('22')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                          </SwiperSlide>
                          <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                               <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                               <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                               <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                        <div className="card" style={{cursor:'pointer'}}>
                                         <img className="card-img-top" src="/Wheat-05.png" style={{border:'0px solid black',margin:'0px',padding:'0px'}}></img>
                                         <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                           <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('23')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                           <a href="#" className="btn btn-success">Buy Now</a>
                                         </div>
                                         </div>
                               
                               </div>
                               </div>    
                               </div>         
                         </SwiperSlide>
                 </Swiper>
              </div>
            </div>
          </div>
             {/* This of the wheat end */}
             {/* Styling of the fruits start */}
             <div className='row' style={{padding:'20px 0px 20px 0px',margin:'0px',border:'0px solid red'}}>
              <div className='col-12 shadow' style={{background: 'linear-gradient(to right, #8CC63F, #ffffff)',padding:'10px 0px 10px 10px',margin:'0px 0px 10px 0px',display:'flex'}}>
                <span style={{margin:'0px',padding:'0px',color:'white',fontSize:'32px',display:'inline-block'}}>
                    Rice
                </span>
              </div>
              <div className='row' style={{border:'0px solid black',padding:'0px',margin:'0px'}}>
              <div className='col-2'style={{border:'0px solid blue',padding:'2px',margin:'0px'}}>
                
                  <div className="card" style={{border:'0px solid red',height:'100%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.77)'}}>
                                 <img className="card-img-top" src="/riceWall.png" style={{height:'100%',borderRadius:'0px'}}></img>
                               
                                 </div>
              </div>    
              <div className='col-10' style={{border:'0px solid orangered',padding:'0px',margin:'0px'}}>
              <Swiper style={{border:'0px solid black'}}
                     spaceBetween={5}
                     pagination={{ clickable: true }}
                     //  navigation={true}
                     slidesPerView={4}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                   >
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/RiceAi-09.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('24')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img className="card-img-top" src="/RiceAi-10.png"></img>
                                 <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                 <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                   <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('25')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                   <a href="#" className="btn btn-success">Buy Now</a>
                                 </div>
                                 </div>
                     
                       </div>
                       </div>    
                       </div>         
                   </SwiperSlide>
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="/RiceAi-11.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('26')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                    </SwiperSlide>
                    <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                         <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                         <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                         <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                  <div className="card" style={{}}>
                                   <img className="card-img-top" src="/RiceAi-12.png"></img>
                                   <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                   <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                     <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('27')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                     <a href="#" className="btn btn-success">Buy Now</a>
                                   </div>
                                   </div>
                         
                         </div>
                         </div>    
                         </div>         
                         </SwiperSlide>
                         <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                             <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                             <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                             <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                      <div className="card" style={{}}>
                                       <img className="card-img-top" src="/RiceAi-13.png"></img>
                                       <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                       <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                         <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('28')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                         <a href="#" className="btn btn-success">Buy Now</a>
                                       </div>
                                       </div>
                             
                             </div>
                             </div>    
                             </div>         
                          </SwiperSlide>
                          <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                               <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                               <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                               <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                        <div className="card" style={{cursor:'pointer'}}>
                                         <img className="card-img-top" src="/RiceAi-14.png" style={{border:'0px solid black',margin:'0px',padding:'0px'}}></img>
                                         <div className="card-body" style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
                                           <h5 className="card-title">Product Name</h5>
                                           <p className="card-text" style={{margin:'0px',fontWeight:'bold'}}>Price : <span style={{border:'0px solid black',padding:'3px',borderRadius:'5px',textShadow:'1px 1px silver'}}>200</span></p>
                                           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                           <a href="#" className="btn btn-primary" onClick={()=>{getSpecificProduct('29')}} style={{marginBottom:'5px'}}>Product Detail</a>
                                           <a href="#" className="btn btn-success">Buy Now</a>
                                         </div>
                                         </div>
                               
                               </div>
                               </div>    
                               </div>         
                         </SwiperSlide>
                 </Swiper>
              </div>
            </div>
          </div>
             {/* This of the fruits end */}
         </div>     
        </div>
    )
}
