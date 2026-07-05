import { useOutletContext } from "react-router-dom";

function Overview() {
  const { product } = useOutletContext();

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Overview</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default Overview;