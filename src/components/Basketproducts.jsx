import { useSelector } from "react-redux";
import Product from "./Product";

function Basketproducts() {
  const { products, total, amount } = useSelector((store) => store.basket);
  return (
    <div className="py-4">
      {amount >= 1 ? (
        <>
          <div className="items-centre">
            {products.map((item) => (
              <Product
                key={new Date().getTime + Math.random()} // Assuming each item has a unique id
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-2xl text-gray-700 font-medium text-center">
            your basket is empty
          </p>
        </>
      )}

      <div className="flex flex-row items-centre justify-evenly py-8">
        <p className="text-2xl font-medium">Total</p>
        <p className="text-2xl font-medium">₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Basketproducts;
