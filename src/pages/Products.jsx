import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500 mt-10">{error}</h2>;
  }
const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="max-w-7xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-8">Products</h1>
    <SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))
) : (
  <p className="col-span-full text-center text-gray-500">
    No products found.
  </p>
)}
    </div>
  </div>
);
}

export default Products;