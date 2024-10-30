// reducers
import { useSelector, useDispatch } from "react-redux";


function Cart() {
  const shopCarts = useSelector((state)=>state.shopCards.value)


  return ( 
    <div className="container">cart</div>
   );
}

export default Cart;