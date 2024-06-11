import { useDispatch } from "react-redux";
import { increaseAmount } from "../features/basketSlice";
import { decreaseAmount, removeItem } from "../features/basketSlice";

const Product = ({ name, price, image, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-centre gap-8 px-10">
      <div className="w-40"></div>

      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg tracking-wide">₹{price.toFixed(2)}</p>
        <button
          className="text-red-500 tracking-wide pt-1 pb-3 "
          onClick={() => {
            dispatch(removeItem({ name }));
          }}
        >
          Remove
        </button>
      </div>

      <div className="flex flex-col item-centre">
        <p className="text-lg font-medium">Amount</p>
        <div className="flex flex-row items-centre gap-4 text-gray-600">
          <button
            className="text-xl"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem({ name }));
                return;
              }
              dispatch(decreaseAmount({ name }));
            }}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="text-xl"
            onClick={() => {
              dispatch(increaseAmount({ name }));
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
