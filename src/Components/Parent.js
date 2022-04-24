import React from 'react'
import Header from './Header'
import Body from './Body'
import Login from './Login';
import Footer from './Footer';
import ShopingCart from './ShopingCart';
import ShopeScreen from './ShopeScreen';
import UserDashboard from './User/UserJs/UserDashboard';
import UserOrders from './User/UserJs/UserOrders';
import UserProfile from './User/UserJs/UserProfile';
import PaymentProcessScreen from './PaymentProcessScreen';
export default function Parent(props) {
    return (
        <>  
        <Header>
        <Footer>
        {window.location.pathname.includes('Authentication')===true?<Login></Login>:null}
        {props.routeName==='HomePage'?<Body datt={'all'}></Body>:null}
        {/* Route for displaying the shope */}
        {props.routeName==='Shope'?<ShopeScreen></ShopeScreen>:null}
        {/* Route for displaying the Shope End */}
        {window.location.pathname.includes('catagorey')===true?<Body datt={'catagorey'}></Body>:null}
        {window.location.pathname.includes('specific')===true?<Body datt={'specific'}></Body>:null}
        {/* Payment Process view Start*/}
        {props.routeName==='paymentProcess'?<PaymentProcessScreen></PaymentProcessScreen>:null}
        {/* Payment Process View End */}
        {/* ShopingCart Shoping cart ShopingCart will be shown here */}
        {props.routeName==='ShopingCart'?<ShopingCart></ShopingCart>:null}
        {/* Shopping Cart End above */}
        {/* For the users Component Start*/}
        {
           props.routeName==='userDashboard'?
           <UserDashboard>
           </UserDashboard>
           :null
        }
        {
           props.routeName==='usersOrder'?
           <UserOrders></UserOrders>
           :null
        }
        {  props.routeName==='userProfile'?
           <UserProfile></UserProfile>
           :null
        } 
        {/* For the user Components End */}
        </Footer>
        </Header>
        </>
    )
}
