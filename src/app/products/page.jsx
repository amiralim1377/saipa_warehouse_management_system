import WarehousePartsTable from "@/components/WarehousePartsTable/WarehousePartsTable";
import { fetchProducts } from "./services/fetchProducts";
import NoProducts from "./components/NoProducts";
import Pagination from "@/components/Pagination/Pagination";

async function Productspage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const pageSize = 20;
  const { data, message, status, totalPages, currentPage } =
    await fetchProducts(page, pageSize);

  return (
    <div className="w-full space-y-2 overflow-x-auto">
      {status === "success" && data.length > 0 ? (
        <>
          <WarehousePartsTable products={data} />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      ) : (
        <NoProducts message={message} />
      )}
    </div>
  );
}

export default Productspage;
