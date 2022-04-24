import React,{ useState, useEffect } from 'react'
import './login.css'
import {useLocation,useNavigate} from "react-router-dom";
export default function Login() {
   const navigate = useNavigate();
   const [userEmail,setUserEmail] = useState('');
   
  const saveUserInfo = ()=>{
      //  var defaultUser = localStorage.getItem('userName');
      //  localStorage.removeItem('newUser');
      //  var newUser = localStorage.setItem('userName','User');
      //  navigate('/');
      //  alert(defaultUser.toString());
      // make all the authentication process 


      // set the user in the local storage
      // var newUser = localStorage.setItem('newUser', 'User');
      if(localStorage.getItem('userName')===null) 
      {
        localStorage.setItem('userName','user');
      }
      else{
        alert('If Statement is not working');
      }
      navigate('/');
      // alert('i am called');
      
  }
  const location = useLocation();

  const [argument,setArgument] = useState('');
  useEffect(() => {
    if(location.pathname.includes('registration'))
    {
      setArgument('Registration');
    }
    if(location.pathname.includes('login'))
    {
      setArgument('Login');
    }
    if(location.pathname.includes('forgotPassword'))
    {
      setArgument('forgotPassword');
    }
    if(location.pathname.includes('confirmPassword'))
    {
      setArgument('confirmPassword');
    }
    if(location.pathname.includes('seller'))
    {
      setArgument('seller');
    }
   
  },[]);
  function customizeMe(cc)
  {
    // alert(document.getElementById('reset').innerHTML);
    var customStyle = document.getElementById('reset');
    switch (cc) {
      case 'l':
     
        customStyle.style.background="linear-gradient(to right, #fe8c00, #f83600)";    
        break;
      case 'e':
      
        customStyle.style.background="linear-gradient(to left, #fe8c00, #f83600)";    
        break;
    
      default:
        break;
    }
    
  }
  function gotoForgotPassword(){
    var currentUrl,newUrl,currentWord,replaceWord;
    var refer = document.createElement('a');
    currentUrl = window.location.href;
    currentWord = currentUrl.split('/')[4];
    replaceWord = "forgotPassword";
    console.log('The current URL is /n'+currentUrl);
    console.log(currentWord);
    newUrl = currentUrl.replace(currentWord,replaceWord);
    console.log('The new URL is /n'+newUrl);
    refer.href=newUrl;
    refer.click();
  }
  const getUseremail =(event)=>{
    // setUserEmail(event.target.value);
    // console.log(userEmail);
    console.log(event);
   }
    return (
        <div>
          {/* For Seller Login Start*/}
          {argument==="seller"?
          <div className='container-fluid loginContainer'>
            <div className='row loginMainRow'>
              <div className='col-6 col-md-6 loginImg'>
                <img src='/login.png'alt='please work'></img>
              </div>
              <div className='col-6 col-md-6 loginForm'>
                <div className=' container loginformContainer shadow'>
                  <div className='row loginformRow'>
                    <div className='col-12 loginformTittle'>
                     <h1>Sign In as Seller</h1>
                    </div>
                    <div className='col-12 loginformBody'>
                      <label>Emain-Address</label>
                      <input placeholder='Enter Email-Address' onChange={getUseremail}></input>
                      <label>Password</label>
                      <input placeholder='Enter Password'></input>
                      <small onClick={()=>{gotoForgotPassword()}}> forgort password</small>       
                    </div>
                    <div className='col-12 loginformButton'>
                      <button>Sing In</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          :null}
          {/* For Seller Login End */}
          {/* For User and Admin Login Start */}
          {argument==="Login"?
          <div className='container-fluid loginContainer'>
            <div className='row loginMainRow'>
              <div className='col-6 col-md-6 loginImg'>
                <img src='/login.png'alt='please work'></img>
              </div>
              <div className='col-6 col-md-6 loginForm'>
                <div className=' container loginformContainer shadow'>
                  <div className='row loginformRow'>
                    <div className='col-12 loginformTittle'>
                     <h1>Sign In</h1>
                    </div>
                    <div className='col-12 loginformBody'>
                      <label>Emain-Address</label>
                      <input placeholder='Enter Email-Address'></input>
                      <label>Password</label>
                      <input placeholder='Enter Password'></input>
                      <small onClick={()=>{gotoForgotPassword()}}> forgort password</small>       
                    </div>
                    <div className='col-12 loginformButton'>
                      <button onClick={()=>{saveUserInfo()}}>Sing In</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          :null}
          {/* For User and Admin Login Start */}
          {/* Registration Start */}
          {argument==="Registration"?
          <div className='container-fluid loginContainer'>
            <div className='row loginMainRow'>
              <div className='col-6 col-md-6 loginImg'>
                <img src='/Register.png'alt='please work'></img>
              </div>
              <div className='col-6 col-md-6 loginForm'>
                <div className=' container loginformContainer shadow'>
                  <div className='row loginformRow'>
                    <div className='col-12 loginformTittle'>
                     <h1>Sign Up</h1>
                    </div>
                    <div className='col-12 loginformBody'>
                      <label>User Name</label>
                      <input placeholder='Enter Email-Address'></input>
                      <label>Emain-Address</label>
                      <input placeholder='Enter Email-Address'></input>
                      <label>Password</label>
                      <input placeholder='Enter Password'></input>
                      <label>Confirm Password</label>
                      <input placeholder='Enter Password'></input>
                    </div>
                    <div className='col-12 loginformButton'>
                      <button>Sing Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </div>
           :null}
           {/* Registration End*/}
           {/* Forgot Password Start */}
          {argument==="forgotPassword"?
          <div className='container-fluid loginContainer'>
            <div className='row loginMainRow'>
              <div className='col-6 col-md-6 loginImg'>
                <img src='/forgotPassword.png'alt='please work'></img>
              </div>
              <div className='col-6 col-md-6 loginForm'>
                <div className=' container loginformContainer shadow'>
                  <div className='row loginformRow'>
                    <div className='col-12 loginformTittle'>
                     <h1>Forgot Password</h1>
                    </div>
                    <div className='col-12 loginformBody'>
                    
                      <label>Emain-Address</label>
                      <input placeholder='Enter Email-Address'></input>
                      <label>Password</label>
                      <input placeholder='Enter Password'></input>
                      <label>Confirm Password</label>
                      <input placeholder='Enter Password'></input>
                    </div>
                    <div className='col-12 loginformButton'>
                      <button className='shadow' style={{ background: 'background: linear-gradient(to right, #00c6ff, #0072ff);'}}>Update</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </div>
           :null}
           {/* Forgot Password End */}
           {/* Confirm Password Start */}
          {
            argument==="confirmPassword"?
            <div className='container-fluid loginContainer'>
             <div className='row loginMainRow'>
              <div className='col-6 col-md-6 loginImg'>
                <img src='/resetPassword.png'alt='please work'></img>
              </div>
              <div className='col-6 col-md-6 loginForm'>
                <div className=' container loginformContainer shadow' style={{borderBottom:'2px solid #fe8c00'}}>
                  <div className='row loginformRow'>
                    <div className='col-12 loginformTittle'>
                     <h1>Reset Password</h1>
                    </div>
                    <div className='col-12 loginformBody'>     
                      <label>New Password</label>
                      <input placeholder='Enter New Password'></input>
                      <label>Confirm Password</label>
                      <input placeholder='Confirm Password'></input>
                    </div>
                    <div className='col-12 loginformButton'>
                      {/* <button id='reset' onMouseMove={()=>{alert(document.getElementById('reset').innerHTML)}} className='shadow' onClick={customizeMe('4')} style={{ background: 'linear-gradient(to right, #fe8c00, #f83600)'}}>Reset</button> */}
                      <button id='reset' onMouseLeave={()=>customizeMe('l')} onMouseEnter={()=>customizeMe('e')} className='shadow' style={{ background: 'linear-gradient(to right, #fe8c00, #f83600)'}}>Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </div>
        :null}
        {/* Confirm Password End */}
        </div>
    )
}
