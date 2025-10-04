"use client";

import { Package } from "lucide-react";

function NoProducts({ message = "هیچ محصولی یافت نشد." }) {
  return (
    <div className="p-6 flex flex-col items-center justify-center text-muted-foreground">
      <Package className="w-12 h-12 mb-4 text-muted-foreground" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}

export default NoProducts;
