import React from 'react';
import AppData from "./AppData"
import SideBar from "./SideBar"
import Click from "./Click"
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import NotFound from './NotFound';



import { Routes, Route } from "react-router-dom";


function App() {

const[totalCount, updateTotalCount] = useState({});
  
  
  function ShowCount(productId , count){
      console.log("this is your oldCount ",productId)
     const oldCount = totalCount[productId] || 0;
 //    console.log("this is your oldCount ",oldCount)
    const newaData = {...totalCount, [productId]:oldCount + count}
          updateTotalCount(newaData);
  //      console.log("this is new data",newaData )
  } 

  const totalProdutCount = Object.keys(totalCount).reduce(function (previous,current){
     return previous + totalCount[current]
    
  }, 0);

  
  
  return (
<div>
         <Header countShow={totalProdutCount} ></Header>

  <div className="flex ">
    <SideBar></SideBar>
    <div className="w-full bg-slate-300">
      <Routes>
        <Route index element={<AppData/>} />
        <Route path="/product" element={<AppData/>} />
       <Route path="/product/details/:id/" element={<Click  onAddToCart={ShowCount}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  </div>
        <Footer></Footer>
 

</div>
  );}


export default App;



  // <Route path="/details/:id/" element={<Click/>} />