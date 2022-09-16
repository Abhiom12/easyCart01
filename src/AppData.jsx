import React, { useState, useEffect } from 'react';
import Item from './Item';
import { getProductList } from "./Api";
import { VscSearch } from "react-icons/vsc";






function AppData() {

  const [search, updateSearch] = useState("");
  const [product, updateProduct] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(function() {
    const effect = getProductList();
    effect.then(function(response) {
      // console.log("this is your data", response.data.products)
      updateProduct(response.data.products);
      setLoading(false);
    })
    
  }, []);


  const [data, updateData] = useState(product)

  const getFilteredItem = (query) => {
    const newData = product.filter(function(item) {

      const b = query.toLowerCase();
      const c = item.title.toLowerCase();

      return (c.indexOf(b) != -1);
    })
    return newData
  }

  useEffect(() => {
    const newData = getFilteredItem(search)
    updateData(newData);
  }, [product])

  function handleFilter(event) {
    let query = event.target.value;
    const newData = getFilteredItem(query)
    updateSearch(query);
    //  console.log({ newData })
    updateData(newData);

  }
  const [short, updateShort] = useState("default")

  if (short == "default") {
    data.sort(function(x, y) {
      return y.rating - x.rating;
    })
  } else
    if (short == "priceLow") {
      data.sort(function(x, y) {
        return x.price - y.price;
      })
    } else if (short == "priceHigh") {
      data.sort(function(x, y) {
        return y.price - x.price;
      })
    } else if (short == "title") {
      data.sort(function(x, y) {
        return y.title > x.title ? 1 : -1;
      })
    }



  function shortValue(event) {
    updateShort(event.target.value)
    // console.log(event.target.value, "this the value you want")
  }

  if (loading) {
    return <div>loading...</div>
  }



  return (
    <div className="bg-slate-300">


      <div className="p-1 flex my-auto space-x-2  font-sm">
        <div className="mx-auto my-5">
          <label className="mx-2 text-blue-500" for="cars">Choose your categary</label>
          <select value={short} className="rounded-sm " onChange={shortValue}>
            <option value="default">Default Sort</option>
            <option value="title">Sort by title</option>
            <option value="priceLow">Sort by price: low to high</option>
            <option value="priceHigh">Sort by price: high to low</option>
          </select>
        </div>
        <div className=" my-5 flex items-center bg-white hover:border-2 hover:border-black"  >
          <VscSearch className="bg-white mt-2 mr-1 " />
          <input className="flex mx-auto w-1\2 hover:border-none hover:border-2 hover:border-yellow-300" placeholder="search" onChange={handleFilter}></input></div>
      </div>

      <Item data={data}></Item>
    </div>

  );
}


export default AppData;