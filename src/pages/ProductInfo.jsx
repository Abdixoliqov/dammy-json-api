// react router dom
import { useParams } from "react-router-dom";

// custom hooks
import { useFetch } from "../hooks/useFetch";

function ProductInfo() {
  const { id } = useParams();

  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  // console.log(data);

  return <div className="container">
    {
      

      isPending && <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>

    }
    {
      data && (
        <div className="flex justify-between gap-4">
          <div >
            <img src={data.images[0]} alt="" className="w-98 h-52" />
          </div>
        </div>
      )
    }
  </div>;
}

export default ProductInfo;
