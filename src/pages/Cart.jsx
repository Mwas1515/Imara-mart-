import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  console.log("Cart page items:", cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain"
              />

              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600">
                ${item.price * item.quantity}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

<div className="mt-8 border-t pt-4 flex justify-between items-center">
  <h2 className="text-xl font-bold">
    Total: ${totalPrice.toFixed(2)}
  </h2>

  <div className="flex gap-3">
    <button
      onClick={clearCart}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Clear Cart
    </button>

    <Link to="/checkout">
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Checkout
      </button>
    </Link>
  </div>
</div>
    </div>
  );
}

export default Cart;