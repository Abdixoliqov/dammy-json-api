import { useLoaderData } from "react-router-dom";

import { useSelector } from "react-redux";

import Product from "./Product";

function ProductContainer() {
  const {products} = useLoaderData()
  // console.log(data);

  const shopCards = useSelector((state) => state.shopCards.value);

  
  return ( 
    <div className="container">
      <div className="flex justify-between flex-wrap  gap-4">
        {
          products.map((product)=><Product key={product.id} product={product} added={shopCards.some(item=>item.id===product.id)}/>)
        }
      </div>
    </div>
   );
}

export default ProductContainer;