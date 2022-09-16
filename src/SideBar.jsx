import React from 'react';
import { Link } from "react-router-dom";







function SideBar() {
return(
  <div className="bg-slate-600 space-y-5  flex text-center flex-col w-56 py-10 px-2  text-white  font-bold pt-10"> 
     <Link  to="/">about</Link>
     <Link  to="/">feture</Link>
     <Link  to="/">contact</Link>
     <Link  to="/">online Help</Link>
  </div>
)  
}


export default SideBar;