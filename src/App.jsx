import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Overview from "./pages/Overview";
import Reviews from "./pages/Reviews";
import Specifications from "./pages/Specifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />}>
          <Route index element={<Overview />} />
          <Route path="reviews" element={<Reviews />} />
          <Route
            path="specifications"
            element={<Specifications />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;