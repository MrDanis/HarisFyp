import React from 'react'
import Home from './Home'
import Product from './Product'
import SpecificProduct from './SpecificProduct'
export default function Body(props) {
    return (
        <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                {/* <h1>{"This is for body "+props.datt}</h1> */}
                {/* {window.location.pathname.includes('')?<Home></Home>:null} */}
                {props.datt==='all'?<Home></Home>:null}
                {props.datt==='specific'?<SpecificProduct></SpecificProduct>:null}
                {props.datt==='catagorey'?<Product></Product>:null}
                {/* {window.location.pathname.includes('catagorey')?<Product></Product>:null} */}
                {/* {window.location.pathname.includes('specific')?<SpecificProduct></SpecificProduct>:null} */}
              </div>
            </div>
        </div>
    )
}
