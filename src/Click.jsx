
import React from 'react';
import { useParams , Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import { RiHome7Line , RiArrowLeftFill , RiArrowRightFill } from "react-icons/ri";
import { getProductDetail } from "./Api"





  function Click({onAddToCart}){
    
   
    
   const [deatils, updateDetail] = useState();
   const [count, updateCount] = useState(1);

   



   const  id = +(useParams().id) 

  useEffect(function() {
    const idEffect = getProductDetail(id);
    idEffect.then(function(response) {
     // console.log("this is your data for", response.data)
      updateDetail(response.data);

    })


  }, [id]);
   


 //console.log(deatils, "this is your this data ")

 function onHandleChange(event){
 updateCount(+event.target.value) 
   
   console.log("this is the best", count) 
}

    
 function buttonHndleCount(){
 onAddToCart(id, count);   
 }



  if (!deatils){
    return <div>loading</div>
  }


  
  
  return(
 <div className="bg-blue-500 p-10">  
   
    <div className="p-10 bg-blue-200   flex flex-col   justify-center space-x-6">
      
          <Link className="mb-20 mr-10 "  to="/"><RiHome7Line className="w-10 p-2 bg-slate-300   h-10"></RiHome7Line>home</Link>
      
        <div className="p-10 bg-blue-300  space-y-5 my-auto" >
            
             <img className="h-96 mx-auto my-auto " src={deatils.thumbnail} />
          
          <div className="p-10  text-center space-y-16" >  
            
             <h1 className="text-4xl font-semibold"> {deatils.title}<span className="text-xl text-blue-500">(powered by</span> <span className="text-4xl text-red-800">{deatils.brand}</span> <span className="text-xl text-blue-500">)</span></h1>

            <div className="space-y-5 w-fit flex mt-10 flex-col pl-36">
               <h1 className="font-bold   text-slate-500  text-xl font-sm self-start">*  price: <span className= " px-5 text-2xl text-blue-800">{deatils.price}$</span></h1> 
               <p  className="font-bold   text-slate-500  text-xl font-sm self-start">description: <span className="text-xl text-slate-700">{deatils.description}</span> </p>
               <h1 className="font-bold   text-slate-500  text-xl font-sm self-start">* stock: <span className="text-2xl text-blue-800">{deatils.stock}</span></h1> 
            </div>
            
              <h2 className="border-2 border-yellow-500 py-3 bg-slate-400 text-2xl my-3 text-blue-800">star (<span className="text-2xl font-bold text-yellow-900 "> {deatils.rating}</span>  out of 5 )</h2>
            
           <div className="p-3 w-fit bg-slate-400 px-10 mx-auto">  
             <input value={count} type="number"  onChange={onHandleChange} className="border-2 text-center text-xl border-black inline-block "/>
             <button onClick={buttonHndleCount} className="bg-red-600 ml-2 text-xl text-white font-medium px-10 py-1" href="amazon.com" target="blank" >Adds to cart</button> 
           </div>  
            
          </div>  
          
        </div>    
       <div className="p-3 flex text-xl  font-bold justify-between bg-blue-700">
       {  id > 0  &&     <Link className=" ml-10  "  to={"/product/details/" + (id - 1 )}><RiArrowLeftFill className="w-10 mx-auto p-2 rounded-sm bg-yellow-300    h-10"></RiArrowLeftFill>previous</Link>}
       <Link className=" mr-10 "  to={"/product/details/" + (id +1 )}> <RiArrowRightFill className="w-10 p-2 bg-yellow-300  rounded-sm h-10"></RiArrowRightFill>next</Link></div>
    </div>

 </div>   
  )
} 
  



export default Click










