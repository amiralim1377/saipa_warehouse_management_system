"use client";

import ProductSelector from "../../ProductSelector/ProductSelector";
import SearchResult from "../../SearchResult/SearchResult";
import SelectedProducts from "../../SelectedProducts/SelectedProducts";

function SelectProductsStep() {
  return (
    <div>
      <ProductSelector />
      <SearchResult />
      <SelectedProducts />
    </div>
  );
}

export default SelectProductsStep;
