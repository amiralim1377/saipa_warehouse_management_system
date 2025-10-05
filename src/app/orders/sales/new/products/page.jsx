"use client";
import ProductSelector from "../components/ProductSelector/ProductSelector";
import SelectedProducts from "../components/SelectedProducts/SelectedProducts";

export default function SelectProductsPage() {
  return (
    <div>
      <ProductSelector />
      <SelectedProducts />
    </div>
  );
}
