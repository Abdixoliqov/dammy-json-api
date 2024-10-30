// loader
import { useLoaderData } from "react-router-dom";

import ProductContainer from "../components/ProductContainer";

// loader
export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Response("Post not found", { status: 404 });
  }
  const post = await response.json();
  return post;
};

function Home() {
  // const data = useLoaderData();
  // console.log(data);
  
  return <div className="container">
    <ProductContainer/>
  </div>;
}

export default Home;
