import { PackageX } from "lucide-react";

function NoProducts({ message = "هیچ محصولی یافت نشد." }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">
      <PackageX className="h-12 w-12 mb-4 text-gray-400" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}

export default NoProducts;
