import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeFromCart } from "../../redux/features/cartSlice/cartSlice";
import Subtotal from "./Subtotal";

const CartProduct = ({ item }) => {
  const { productName, category, imgUrl, price, quantity, id } = item;
  const cartData = useSelector((state)=>state.cartProduct)
  const dispatch = useDispatch();
  const removeProduct = () => {
    dispatch(removeFromCart(id))
  }
  const increaseProductCart = () => {
    dispatch(increase(id));
  }
  const decreaseProductCart = () => {
    if(quantity>0){
      dispatch(removeFromCart(id));
    }else{
      dispatch(decrease(id))
    }
  }
  return (
    <div>
      <div className="rounded-lg">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          {/* Product Image */}
          <img
            src={imgUrl}
            alt={productName}
            className="w-full h-28 rounded-lg sm:w-40 object-cover"
          />

          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            {/* Product Details */}
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{productName}</h2>
              <p className="mt-1 text-sm text-gray-700">Price: $ {price} </p>
              <p className="mt-1 text-sm text-gray-700">Category: {category} </p>
            </div>

            {/* Quantity Controls */}
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                {/* Decrease Quantity Button */}
                <span
                onClick={decreaseProductCart}
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white"
                >
                  -
                </span>

                {/* Quantity Display */}
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={quantity}
                  readOnly
                />

                {/* Increase Quantity Button */}
                <span
                onClick={increaseProductCart}
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-white"
                >
                  +
                </span>
              </div>

              {/* Price and Remove Button */}
              <div className="flex items-center space-x-4">
                {/* <p className="text-sm">${(price * quantity).toFixed(2)}</p> */}
                <button
                  onClick={removeProduct}
                  className="lws-removeFromCart text-red-500"
                >
                  x
                </button>
              </div>
              <div>
                <Subtotal></Subtotal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct