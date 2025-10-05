"use client";
import { useState } from "react";
import { useOrder } from "../../context/OrderContext";
import NoProducts from "../NoProducts/NoProducts";
import useSearchParts from "../../hook/useSearchParts/useSearchParts";
import { Spinner } from "@/components/ui/spinner";

export default function SearchResult() {
  const { searchResults, addItem } = useOrder();
  const [quantities, setQuantities] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const { isLoading, error } = useSearchParts();

  if (isLoading) return <Spinner />;
  if (error) return <div className="text-red-500">خطا در بارگذاری داده‌ها</div>;

  if (!searchResults || searchResults.length === 0) return <NoProducts />;

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddToOrder = (item) => {
    const quantity = Number(quantities[item.id] || 1);

    if (quantity > item.stock) {
      setErrorMessage(
        `مقدار وارد شده برای "${item.part_name}" بیشتر از موجودی است.`
      );
      return;
    }

    setErrorMessage("");
    addItem({ ...item, quantity });
  };
  return (
    <div className="overflow-x-auto rounded-lg my-6">
      <table className="min-w-full  border border-border rounded-lg text-sm bg-card text-card-foreground">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="px-4 py-2 border border-border">کد قطعه</th>
            <th className="px-4 py-2 border border-border">نام قطعه</th>
            <th className="px-4 py-2 border border-border">انبار</th>
            <th className="px-4 py-2 border border-border">موجودی</th>
            <th className="px-4 py-2 border border-border">قیمت واحد</th>
            <th className="px-4 py-2 border border-border">مجموع ارزش</th>
            <th className="px-4 py-2 border border-border">موقعیت</th>
            <th className="px-4 py-2 border border-border">اقدامات</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((item) => (
            <tr key={item.id} className="hover:bg-muted text-center">
              <td className="px-4 py-2 border border-border">
                {item.part_code}
              </td>
              <td className="px-4 py-2 border border-border">
                {item.part_name}
              </td>
              <td className="px-4 py-2 border border-border">
                {item.warehouse_name || "-"}
              </td>
              <td className="px-4 py-2 border border-border">{item.stock}</td>
              <td className="px-4 py-2 border border-border">
                {item.unit_price
                  ? `${item.unit_price.toLocaleString()} تومان`
                  : "-"}
              </td>
              <td className="px-4 py-2 border border-border">
                {item.total_value
                  ? `${item.total_value.toLocaleString()} تومان`
                  : "-"}
              </td>
              <td className="px-4 py-2 border border-border">
                {item.location}
              </td>
              <td className="px-4 py-2 border border-border">
                <div className="flex items-center justify-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={quantities[item.id] || ""}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    placeholder="تعداد"
                    className="w-16 border border-border rounded-md text-center p-1 text-sm focus:ring-1 focus:ring-primary"
                  />
                  <button
                    onClick={() => handleAddToOrder(item)}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm hover:bg-primary/80 transition"
                  >
                    افزودن
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {errorMessage && (
        <div className="my-2 text-red-500 font-medium">{errorMessage}</div>
      )}
    </div>
  );
}
