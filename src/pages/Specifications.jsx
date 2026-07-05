import { useOutletContext } from "react-router-dom";

function Specifications() {
  const { product } = useOutletContext();

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Specifications</h3>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Rating:</strong> {product.rating?.rate} ⭐
      </p>
    </div>
  );
}

export default Specifications;