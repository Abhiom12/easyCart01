import React from 'react';
import Middle from './Middle';










function Item({ data }) {

  console.log({ cjsdbkvvb: data })
  return (
    <div className="flex bg-slate-300 h-fit flex-wrap justify-center p-20 space-y-5">

      {data.map(function(e) {
        return (
          <Middle key={e.id} {...e} />
        )

      })}


    </div>
  );
}

export default Item;