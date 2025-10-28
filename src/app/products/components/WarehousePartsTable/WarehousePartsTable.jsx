"use client";

export default function WarehousePartsTable({ products = [] }) {
  return (
    <div className="w-full">
      {/* Desktop & Tablet Table */}
      <div className="overflow-x-auto border rounded-md hidden md:block">
        <table className="w-full border-collapse table-auto text-xs text-right">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-2 py-1 border">کد قطعه</th>
              <th className="px-2 py-1 border">نام قطعه</th>
              <th className="px-2 py-1 border">موجودی</th>
              <th className="px-2 py-1 border">وضعیت</th>
              <th className="px-2 py-1 border">دسته‌بندی</th>
              <th className="px-2 py-1 border">زیرمجموعه</th>
              <th className="px-2 py-1 border">واحد</th>
              <th className="px-2 py-1 border">مکان انبار</th>
              <th className="px-2 py-1 border">تأمین‌کننده</th>
              <th className="px-2 py-1 border">تاریخ ورود</th>
              <th className="px-2 py-1 border">قیمت واحد</th>
              <th className="px-2 py-1 border">ارزش کل</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="text-xs hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="px-2 py-1 border">{product.part_code}</td>
                <td className="px-2 py-1 border">{product.part_name}</td>
                <td className="px-2 py-1 border">{product.stock}</td>
                <td className="px-2 py-1 border">{product.status}</td>
                <td className="px-2 py-1 border">{product.category_name}</td>
                <td className="px-2 py-1 border">{product.subcategory_name}</td>
                <td className="px-2 py-1 border">{product.unit}</td>
                <td className="px-2 py-1 border">{product.location}</td>
                <td className="px-2 py-1 border">{product.supplier_name}</td>
                <td className="px-2 py-1 border">
                  {new Date(product.entry_date).toLocaleDateString("fa-IR")}
                </td>
                <td className="px-2 py-1 border">
                  {product.unit_price.toLocaleString()}
                </td>
                <td className="px-2 py-1 border">
                  {product.total_value.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid md:hidden gap-2 mt-2 text-xs">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm"
          >
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">کد قطعه:</span>
              <span className="text-xs">{product.part_code}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">نام قطعه:</span>
              <span className="text-xs">{product.part_name}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">موجودی:</span>
              <span className="text-xs">{product.stock}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">وضعیت:</span>
              <span className="text-xs">{product.status}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">دسته‌بندی:</span>
              <span className="text-xs">{product.category_name}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">زیرمجموعه:</span>
              <span className="text-xs">{product.subcategory_name}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">واحد:</span>
              <span className="text-xs">{product.unit}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">مکان انبار:</span>
              <span className="text-xs">{product.location}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">تأمین‌کننده:</span>
              <span className="text-xs">{product.supplier_name}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">تاریخ ورود:</span>
              <span className="text-xs">
                {new Date(product.entry_date).toLocaleDateString("fa-IR")}
              </span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">قیمت واحد:</span>
              <span className="text-xs">
                {product.unit_price.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="font-semibold text-xs">ارزش کل:</span>
              <span className="text-xs">
                {product.total_value.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
