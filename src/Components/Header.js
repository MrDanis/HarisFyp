import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'
export default function Header({children}) {
    const [getUser,setgetUser] = useState();
    useEffect(()=>{
        var getUser = localStorage.getItem('userName');
        // alert('component is rerandered'); 
    },[])
    const navigateOutUser = useNavigate();
    const logedOutUser =()=>{
      localStorage.removeItem('userName');
      navigateOutUser('/');
      // alert('i am called');
    }
    return (
        <div classNameNameName='container-fluid newHed shadow'>
            <div className='row shadow HeadMainRow'>
                            <div className='col-sm-10 col-md-6 mainLogo'>
                                  <div className='container-fluid logoContainer'>
                                      <div className='row logoSearch'>
                                          <div className='col-4 mainLogo'>
                                                 <p>P.A System</p>
                                          </div>
                                          <div className='col-8 mySearchbar'>
                                            <div className='container searchBorder'>
                                                <input placeholder='Serach here'></input>
                                                <i class="fal fa-search"></i>
                                            </div>
                                          </div> 
                                      </div>
                                  </div>
                            </div>
                            <div className='col-sm-2 col-md-6 navItr'>
                            <ul className='navItr1'>
                                <li>
                                    <Link className='customHeaderLinks' to={'/'}>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='customHeaderLinks' to={'/Shope'}>
                                        <span>Shope</span>
                                    </Link>
                                </li>
                                <li>
                                    <a>
                                        <span>About</span>
                                    </a>
                                </li>
                                <li>
                                <Link className='customHeaderLinks' to={'/Authentication/login'}>
                                    <span>Contact-US</span>
                                </Link>

                                </li>
                                {/* {
                                  getUser==='Guest'?  
                                :null
                                } */}
                                {
                                 (localStorage.getItem('userName')!='user')&&(localStorage.getItem('userName')!='admin')?
                                <li>
                                  <Link className='customHeaderLinks' to={'/Authentication/login'}>
                                        <span>Login</span>
                                  </Link>
                                </li>:null
                                }

                                   <li>      
                                    <Link className='customHeaderLinks' to={'/ShopingCart'}>
                                    <span>Cart</span>
                                    </Link>  
                                   </li>
                                {
                                     getUser==='Seller'?
                                   <li>      
                                     <Link className='customHeaderLinks' to={'/Authentication/seller'}>
                                      <span>Seller</span>
                                     </Link>  
                                   </li>:null
                                }
                                {
                                  localStorage.getItem('userName')==='user'?  
                                <li>
                                 <p className='d-flex align-items-center justify-content-center' style={{position:'relative'}}>
                                  {/* <i className="mx-2 fas fa-user-tie fa-2x" style={{color:'green'}}></i> */}
                                  <i class="fas fa-user fa-2x mx-2"></i>
                                  <span className='mx-1'>{getUser}</span>
                                  <div className="dropdown">
                                     <button className="UserDropDownMenu" style={{backgroundColor:'transparent',outline:'none',border:'none'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                     <i className="far fa-angle-down bg-dark d-flex justify-content-center align-items-center" style={{width:'20px',height:'20px',borderRadius:'50%',color:'white',cursor:'pointer'}}></i>
                                     </button>
                                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{transform:'translate3d(0px, 30px, 0px)!important'}}>
                                       <li><Link className=" m-0 fs-6  dropdown-item" to={'/userDashboard'} style={{ paddingLeft:'15px',fontWeight:'400',color:'black'}}>Dashboard</Link></li>
                                       <li><Link className=" m-0 fs-6  dropdown-item" to={'/usersOrder'}    style={{ paddingLeft:'15px',fontWeight:'400',color:'black'}}>My Orders</Link></li>
                                       <li><Link className=" m-0 fs-6  dropdown-item" to={'/userProfile'}   style={{ paddingLeft:'15px',fontWeight:'400',color:'black'}}>Manage Profile</Link></li>
                                       <li>
                                       
                                           <span className=" m-0 fs-6  dropdown-item logoutUserlink" style={{color:'black'}} onClick={()=>{logedOutUser()}}>Logout</span>
                                       </li>
                                     </ul>
                                    </div>
                                  {/* <i className="far fa-angle-down bg-dark d-flex justify-content-center align-items-center" style={{width:'20px',height:'20px',borderRadius:'50%',color:'white',cursor:'pointer'}}></i>    */}
                                 </p>  
                                </li>:null
                                }
                                {
                                  getUser==='admin'?  
                                <li>
                                  <Link className='customHeaderLinks' to={'/Authentication/login'}>
                                        <span>Login</span>
                                  </Link>
                                </li>:null
                                }
                                

                            </ul>

                            </div>
            </div>
            {children}
        </div>
      
    )
}
