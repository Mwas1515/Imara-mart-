function ProductCard({ product }) {
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

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
}

export default ProductCard;