import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-">
        Imara-Mart 
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/products" className="hover:text-blue-600">
          Products
        </Link>

        <Link to="/cart" className="relative hover:text-blue-600">
          Cart

          {/* Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;