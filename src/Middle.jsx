import React from 'react';
import { Link } from "react-router-dom";




function Middle(data) {
  console.log({ datadfsd: data })



  return (
    <div className="m-10 p-3 space-y-3 bg-white w-56 bg-slate-200 flex justify-between flex-col">
      <img className="p-2 h-56 w-56 " src={data.thumbnail} />
      <div className="text-center flex justify-between flex-col bg-slate-100 ">
        <h2 className="font-bold text-2xl">{data.title}</h2>
        <h2 className="my-2">{data.description}</h2>
        <h2 className="font-bold text-3xl">{data.price}$</h2>
        <h2 className="border-2 border-yellow-500 mb-2 bg-slate-700 text-xl my-3 text-blue-600">star(<span className="text-2xl font-bold text-yellow-500 ">{data.rating}</span> out of 5 )</h2>
      </div>
      <Link to={"/product/details/" + data.id} className='bg-blue-500 font-bold m-5 p-1 mx-auto rounded-md'>get details</Link>
    </div>
  );
}

export default Middle;