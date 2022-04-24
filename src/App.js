import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Parent from './Components/Parent';
import MainDashboard from './Components/admin/AdminJs/MainDashboard';
//import NewProduct from './Components/admin/AdminJs/NewProduct';

function App() {
  useEffect(()=>{
    // var defaultUSer = 'Guest';
    // localStorage.setItem('userName', defaultUSer);
  },[]);
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Parent routeName={'HomePage'}></Parent>}></Route>
       <Route path="/catagorey" element={<Parent routeName={''}></Parent>}></Route>
       <Route path="/specific/:id" element={<Parent routeName={''}></Parent>}></Route>
       <Route path="/Authentication/seller" element={<Parent routeName={''}></Parent>}></Route>
       <Route path="/Authentication/login" element={<Parent routeName={''}></Parent>}></Route>
       <Route path="/Authentication/registration" element={<Parent routeName={''}></Parent>}></Route>
       <Route path="/Authentication/forgotPassword" element={<Parent routeName={''}></Parent>}></Route>
       <Route path="/Authentication/confirmPassword" element={<Parent routeName={''}></Parent>}></Route>
       <Route path="/Admin/Dashboard" element={<MainDashboard pageShow={'home'}></MainDashboard>}></Route>
       <Route path='/admin/addNewProduct' element={<MainDashboard pageShow={'addProduct'}></MainDashboard>}></Route>
       <Route path='/admin/addCatagorey' element={<MainDashboard pageShow={'addCatagorey'}></MainDashboard>}></Route>
       <Route path='/admin/viewProduct' element={<MainDashboard pageShow={'viewProduct'}></MainDashboard>}></Route>
       <Route path='/admin/viewCatagorey' element={<MainDashboard pageShow={'viewCatagorey'}></MainDashboard>}></Route>
       <Route path='/Shope' element={<Parent routeName={'Shope'}></Parent>}></Route>
       <Route path='/ShopingCart' element={<Parent routeName={'ShopingCart'}></Parent>}></Route>
       <Route path='/PaymentProcess' element={<Parent routeName={'paymentProcess'}></Parent>}></Route>
       {/* Routes for the users Start*/}
       <Route path='/userDashboard' element={<Parent routeName={'userDashboard'}></Parent>}></Route>
       <Route path='/usersOrder' element={<Parent routeName={'usersOrder'}></Parent>}></Route>
       <Route path='/userProfile' element={<Parent routeName={'userProfile'}></Parent>}></Route>

       {/* Routes of the users End */}
     </Routes>
   </Router> 
  );
}

export default App;
