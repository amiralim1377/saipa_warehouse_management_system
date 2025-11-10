import ProductsStats from "./components/ProductsStats/ProductsStats";
import ProductPageContent from "./components/ProductPageContent/ProductPageContent";
import { fetchProducts } from "./services/fetchProducts";
import getProductsStats from "@/services/getProductsStats";
import { ProductsProvider } from "./context/ProductsContext";
import { fetchCategories } from "../orders/sales/new/services/fetchCategories";
import getSubCategories from "./services/getSubCategories";

export const dynamic = "force-dynamic";

async function Productspage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const { subcategories: subcategoryId } = await searchParams;

  const pageSize = 10;
  const { data, message, status, totalPages, currentPage } =
    await fetchProducts(page, pageSize, subcategoryId);

  const {
    data: statsData,
    message: statsMessage,
    success: statsSuccess,
  } = await getProductsStats();

  const { categories } = await fetchCategories();
  const { subcategories: subcategoriesData } = await getSubCategories();

  return (
    <>
      <ProductsStats data={statsData} />
      <ProductsProvider
        categories={categories}
        subcategories={subcategoriesData}
      >
        <ProductPageContent
          currentPage={currentPage}
          totalPages={totalPages}
          products={data}
          message={message}
        />
      </ProductsProvider>
    </>
  );
}

export default Productspage;
