import { useAuth } from "../context/AuthContext";

function Checkout() {
  const { user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Checkout
      </h1>

      <p className="mb-4">
        Welcome, {user?.email}
      </p>

      <form className="space-y-3">
        <input
          placeholder="Full Name"
          className="w-full border p-2"
        />

        <input
          placeholder="Address"
          className="w-full border p-2"
        />

        <input
          placeholder="Phone"
          className="w-full border p-2"
        />

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          type="button"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;