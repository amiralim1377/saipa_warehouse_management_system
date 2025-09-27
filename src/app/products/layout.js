import ProductCategoryFilter from "@/components/ProductCategoryFilter/ProductCategoryFilter";

function ProductsCategoryLayout({ children }) {
  return (
    <div className="flex w-full justify-between gap-x-2 p-4">
      {children}
      <ProductCategoryFilter />
    </div>
  );
}

export default ProductsCategoryLayout;
