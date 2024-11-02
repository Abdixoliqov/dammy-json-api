// react router dom
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src={
            "https://asaxiy.uz/custom-assets/images/cabinet/basket_no_page.png"
          }
          alt=""
        />
      </div>
      <h2 className="text-center mt-10 mb-4 text-2xl">
        There are no products in your shopping cart
      </h2>
      <div className="text-center">
        <Link to={"/"} className="btn btn-info mx-auto text-center">
          Go Home
        </Link>
      </div>
    </>
  );
}

export default EmptyCart;
