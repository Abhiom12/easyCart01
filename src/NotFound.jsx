import React from 'react';
import { RiHome7Line } from "react-icons/ri";
import { Link } from "react-router-dom";





function NotFound() {


  return (
<div className="px-10 flex   flex-col bg-slate-400 w-full h-full ">
   <div  className="p-10 h-fit my-auto mx-auto w-fit h-fit bg-slate-300">
     <img  className="p-10 h-80 w-96 mx-auto  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4E2B7AutKCMX2_x6bjj9tjM7A88mDJAJ6w&usqp=CAU"/>

 
       <Link to="/" className="p-2 mt-3 font-lg flex w-fit rounded-md  mx-auto bg-blue-500 text-white" >go to home 
       <RiHome7Line className="my-auto ml-1  w-5 h-5  text-black"/></Link>
      </div>   
   
  
</div>
  );
}

export default NotFound;