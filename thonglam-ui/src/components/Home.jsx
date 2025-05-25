import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";


export default function Home() {
  const isActive = Math.random() >0.5;

  const h1Styling ={
  textAlign : "center",
  color: isActive ? "black": "red"
}
  return (
   <>
   <h1 className={`my-heading ${isActive? "primary-color": "secondary-color"}`}>Demo of Global CSS Scope from Home</h1>
   {/* <h1 className="my-heading">Demo of Global CSS Scope from Home</h1> */}
   {/* <h1 style={h1Styling}>Demo of Global CSS Scope from Home</h1> */}
    <div className="home-container">
      <PageHeading title="Explore Eazy Sticker">welcome to this new project!</PageHeading>
      <ProductListing  products={products}/>
    </div>
   </>
  );
}
