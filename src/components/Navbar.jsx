import { useSelector } from "react-redux";

function Navbar() {
  const amount1 = useSelector((store) => store.basket.amount);
  return (
    <div className="flex flex-row justify-evenly mt-0 pt-4 text-lg font-medium">
      <p>Home</p>
      <p>
        Basket
        <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {amount1}
        </span>
      </p>
    </div>
  );
}

export default Navbar;
