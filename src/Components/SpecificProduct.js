import React,{ useState, useEffect } from 'react'
import './SpecificProduct.css';
import { useParams } from 'react-router';
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
SwiperCore.use([Autoplay,Pagination,Navigation]);
export default function SpecificProduct() {
    const [productId,setpeoductId] =  useState(0);
    const [productCatagorey,getProductCatagorey] = useState('');
    const [purchase,setPurchase] = useState(false);
    const [purchaseBulk,setPurchaseBulk] = useState(false);
    const setQty = (type)=>{
     switch (type) {
         case '1':
            setPurchase(true);
            setPurchaseBulk(false);    
             break;
        case '2':
            setPurchase(false);
            setPurchaseBulk(true);
                break;     
         default:
             break;
     }
    }
    // to display the current selected product 
    const displayProduct =(idd) =>{
      setpeoductId(idd);
    }
    //to display the similar product
    const getSimilarProducts=(id)=>{
        //make a for loop over the whole product array
        // if the current ID is equall to product.id then execute the following line of code
        // getProductCatagorey(product.catagorey);
         console.log('To get the catagorey specific product '+id)
    } 
    var {id} = useParams();
    useEffect(() => {
      setpeoductId(id);
      getSimilarProducts(id);
    }, [])
    return (
        <div className='conatiner-fluid' style={{border:'2px solid red',padding:'0px',margin:'0px'}}>
           
           <div className='row' style={{border:'2px solid blue',padding:'0px',margin:'0px'}}>
             <div className='col-2' style={{border:'2px solid green',padding:'2px',margin:'0px'}}>
                 <div className='card'style={{border:'1px solid red',height:'100%',boxShadow:'0px 5px 5px 0px rgba(0,0,0,0.77)'}}>
                 <img className="card-img-top" src="/FruitsCat.png" style={{height:'100%'}} ></img>
                 </div>
             </div>
             <div className='col-10' style={{padding:'10px 0px 0px 10px',margin:'0px',border:'2px solid purple',display:'flex',flexDirection:'column'}}>
                 <h1>Product Detail</h1>
                 <h5>Product Name : {productId}</h5>
                 <h5>Catagorey :{productId}</h5>
                 <h5>Price :{productId}</h5>
                 <h5>Discription : <span className='text-justify' style={{fontWeight:'normal',fontSize:'14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</span></h5>
                 <h1>{productId}</h1>
                 <div className="btn-group-sm" role="group" aria-label="Basic example" style={{marginBottom:'1%',outline:'none'}}>
                   <button onClick={()=>{setQty('1')}} type="button" className="btn" style={{marginRight:'1%',fontWeight:'bold',fontSize:'16px',border:'0px solid black',textAlign:'start',paddingLeft:'0px'}}>Custom Purchase</button>
                   { purchase?<>
                       <button type="button" className="btn" style={{backgroundColor:'#E9ECEF'}}><i class="fas fa-plus"></i></button>
                       <button type="button" className="btn" style={{}}>{productId}{productId}</button>
                       <button type="button" className="btn" style={{backgroundColor:'#E9ECEF'}}><i class="fas fa-minus" style={{color:'black'}}></i></button>
                   </>:null }
                   {/* <button type="button" className="btn" style={{backgroundColor:'#E9ECEF'}}><i class="fas fa-plus"></i></button>
                   <button type="button" className="btn" style={{}}>{productId}{productId}</button>
                   <button type="button" className="btn" style={{backgroundColor:'#E9ECEF'}}><i class="fas fa-minus" style={{color:'black'}}></i></button> */}
                 </div>
                 <div className="btn-group-sm" role="group" aria-label="Basic example" style={{}}>
                   <button onClick={()=>{setQty('2')}} type="button" className="btn" style={{marginRight:'1%',fontWeight:'bold',outline:'none',paddingRight:'13px',fontSize:'16px',border:'0px solid black',textAlign:'start',paddingLeft:'0px'}}>Purchase  in Bulk </button>
                   {
                       purchaseBulk?<>
                       <button type="button" className="btn btn-primary"><i class="fas fa-plus"></i></button>
                       <button type="button" className="btn ">{productId}{productId}</button>
                       <button type="button" className="btn btn-danger"><i class="fas fa-minus"></i></button>
                       </>:null
                   }
                  
                   {/* <button type="button" className="btn btn-primary"><i class="fas fa-plus"></i></button>
                   <button type="button" className="btn ">{productId}{productId}</button>
                   <button type="button" className="btn btn-danger"><i class="fas fa-minus"></i></button>  */}
                 </div>  
                 <a href="#" className="btn btn-success" style={{width:'15%'}}>Buy Now</a>     
             </div>
           </div>
            {/* <h1>This is Specific Product View and the Product Id is {productId}</h1> */}
            {/* For relevant product */}
            <div className='row' style={{border:'2px solid green',padding:'0px',margin:'0px'}}>
             <div className='col-12'>
             <Swiper style={{border:'0px solid black'}}
                     spaceBetween={5}
                    //  pagination={{ clickable: true }}
                     navigation={{ clickable: true }}
                     slidesPerView={4}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}
                   >
                   <SwiperSlide style={{border:'0px solid red',paddingBottom:'5px'}}>

                       <div className='container-fluid' style={{border:'0px solid blue',padding:'0px',margin:'0px'}}>
                       <div className='row'style={{border:'0px solid green',padding:'2px',margin:'0px'}}>
                       <div className='col-12'style={{border:'0px solid red',padding:'0px',margin:'0px'}}>
                                <div className="card" style={{}}>
                                 <img onClick={()=>{displayProduct(1)}} className="card-img-top" src="/AppleAi.png"style={{height:'100%',borderRadius:'0px',cursor:'pointer'}}></img>
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
                                        
                                         </div>
                               
                               </div>
                               </div>    
                               </div>         
                         </SwiperSlide>
                 </Swiper>
             </div>
           </div>
        </div>
    )
}
