import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { user } = useAuth();
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    alert("Order placed successfully 🎉");

    clearCart();
    navigate("/products");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">

      {/* LEFT: FORM */}
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Checkout
        </h1>

        <p className="mb-4 text-gray-600">
          Logged in as: {user?.email}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <div className="border rounded p-4 h-fit">
        <h2 className="text-xl font-bold mb-4">
          Order Summary
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty
          </p>
        ) : (
          <>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {item.title.slice(0, 25)}...
                  </span>

                  <span>
                    x{item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <h3 className="text-lg font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </>
        )}
      </div>

    </div>
  );
}

export default Checkout;