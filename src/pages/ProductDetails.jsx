import { useEffect, useState } from "react";
import {
  useParams,
  NavLink,
  Outlet,
} from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-2xl text-green-600 mt-4">
            ${product.price}
          </p>

          <div className="flex gap-6 mt-8 border-b pb-2">
            <NavLink to="" end>
              Overview
            </NavLink>

            <NavLink to="reviews">
              Reviews
            </NavLink>

            <NavLink to="specifications">
              Specifications
            </NavLink>
          </div>

          <Outlet context={{ product }} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;