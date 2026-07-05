import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />

      <h2 className="font-semibold mt-4 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-gray-500 mt-2 capitalize">
        {product.category}
      </p>

      <p className="text-green-600 font-bold text-lg mt-2">
        ${product.price}
      </p>

      <div className="flex flex-col gap-2 mt-4">
        <button
          onClick={() => {console.log("Cart clicked:", product);addToCart(product)}}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>

        <Link
          to={`/products/${product.id}`}
          className="w-full bg-blue-600 text-white py-2 rounded text-center hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;