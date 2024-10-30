// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./features/counter/counterSlice";

// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";


// pages
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";

// loader
import { loader as HomeLoader } from "./pages/Home";

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
          loader: HomeLoader,

        },
        {
          path: '/productInfo/:id',
          element: <ProductInfo/>
        }
      ]

    }
  ])

  return <RouterProvider router={routes}/>
    
  
}

export default App;
