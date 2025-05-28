
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetchProduct()
  }, [])
 
  const fetchProduct = async() =>{
    const response = await apiClient.get("/products"); // axios GET Reqeust
    setProducts(response.data);
  }
  return (
   <>
   <h1 className={`my-heading ${isActive? "primary-color": "secondary-color"}`}>Demo of Global CSS Scope from Home</h1>

    <div className="home-container">
      <PageHeading title="Explore Eazy Sticker">welcome to this new project!</PageHeading>
      <ProductListing  products={products}/>
    </div>
   </>
  );
}
