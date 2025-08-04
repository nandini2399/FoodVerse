import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return (
      <div className="text-center">
        <h1 className="font-bold m-4 p-4 text-xl">Cart</h1>
        {cartItems.length === 0 ? (
          <p>Cart is empty. Add items to continue!</p>
        ) : (
          <div>
            <button
              onClick={handleClearCart}
              className="m-2 p-2 rounded-xl text-amber-50 bg-black cursor-pointer"
            >
              Clear Cart
            </button>
            {cartItems.map((item, idx) => {
              return (
                <p data-testid="foodItems" key={idx} className="my-2 font-medium">
                  {item}
                </p>
              );
            })}
          </div>
        )}
      </div>
    );
}

export default Cart; 