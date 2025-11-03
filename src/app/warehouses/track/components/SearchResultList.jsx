"use client";
import NoProducts from "@/components/NoProducts/NoProducts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SearchResultList({ results }) {
  if (!results || results.length === 0) {
    return <NoProducts message="هیچ محصولی یافت نشد." />;
  }

  return (
    <div className="mt-4 p-6">
      <h3 className="text-xl font-bold mb-4">📋 نتایج جستجو</h3>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted text-foreground">
            <tr>
              <th className="p-3 text-right">نام قطعه</th>
              <th className="p-3 text-right">کد فنی</th>
              <th className="p-3 text-right">موجودی</th>
              <th className="p-3 text-right">انبار</th>
              <th className="p-3 text-right">جایگاه</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {results.map((part) => (
              <tr
                key={part.id}
                className="border-t border-border hover:bg-muted transition-colors"
              >
                <td className="p-3">{part.part_name}</td>
                <td className="p-3">{part.part_code}</td>
                <td className="p-3">{part.stock}</td>
                <td className="p-3">{part.warehouse_name || part.warehouse}</td>
                <td className="p-3">{part.location}</td>
                <td className="p-3 text-center">
                  <Link href={`/inventory/info/${part.id}`}>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground"
                    >
                      مشاهده جزئیات
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchResultList;
