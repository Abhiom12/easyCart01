import React from 'react';
import { VscUnlock } from "react-icons/vsc";





function Header({countShow}) {


  return (
  <div className="px-10 flex  justify-between bg-slate-200 ">
        <img className="w-40 h-30" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x313.png" />
     <div className="flex h-fit my-auto p-2 mb-10 flex-col">  
        <VscUnlock  className="hover:rounded-md  p-2 hover:bg-slate-300 w-12 h-12  my-auto" />
        <h2  className="rounded-full  bg-yellow-300  font-bold  text-blue-800 -mt-14  ml-8  h-6  w-6 text-center my-auto">{countShow}</h2>
      </div>

  </div>
  );
}

export default Header;