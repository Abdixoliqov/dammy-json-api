import { useLoaderData } from "react-router-dom";


import Product from "./Product";

function ProductContainer() {
  const {products} = useLoaderData()
  // console.log(data);
  
  return ( 
    <div className="container">
      <div className="flex justify-between flex-wrap  gap-4">
        {
          products.map((product)=><Product key={product.id} product={product}/>)
        }
      </div>
    </div>
   );
}

export default ProductContainer;