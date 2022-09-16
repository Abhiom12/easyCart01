import React from 'react';
import { Link } from "react-router-dom";







function SideBar() {
return(
  <div className="bg-slate-800 space-y-5 flex text-center flex-col w-56 py-10 px-2 h-screen  text-white  font-bold pt-10"> 
    <Link  to="/product">PRODUCTS</Link>
  </div>
)  
}


export default SideBar;