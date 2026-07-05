import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold">Welcome to Imara-Mart</h1>
      <Link to ={'/products'}>
      <p className="mt-4 text-black font-semibold">
        Discover amazing products at great prices.
      </p>
      </Link>

    </div>
  );
}

export default Home;