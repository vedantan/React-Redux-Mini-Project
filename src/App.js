import { useDispatch, useSelector } from "react-redux";
import Basketproducts from "./components/Basketproducts";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { updateTotal } from "./features/basketSlice";


function App() {
  const {products} = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(updateTotal())
  }, [products,dispatch])

  return (
    <div className="bg-yellow-200 min-h-screen">
        <Navbar/>
        <h1 className="text-center text-3xl font-medium mt-2 py-4">React-Redux Mini-Project Mobile Store</h1>
        <Basketproducts/>
    </div>
  );
}

export default App;
