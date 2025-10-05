"use client";
import ProductSelector from "../components/ProductSelector/ProductSelector";
import SearchResult from "../components/SearchResult/SearchResult";
import SelectedProducts from "../components/SelectedProducts/SelectedProducts";

export default function SelectProductsPage() {
  return (
    <div>
      <ProductSelector />
      <SearchResult />
      <SelectedProducts />
    </div>
  );
}
