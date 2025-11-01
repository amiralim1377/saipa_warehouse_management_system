import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import getTargetProducts from "../../services/getTargetProducts";

export default async function InventoryInfoDetailsPage({ params }) {
  const { id: targetId } = await params;
  const result = await getTargetProducts(targetId);

  const data = Array.isArray(result) ? result[0] : result;

  if (!data) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        اطلاعاتی برای این محصول یافت نشد.
      </div>
    );
  }

  const {
    part_code,
    part_name,
    category_id,
    subcategory_id,
    supplier_id,
    unit,
    stock,
    unit_price,
    total_value,
    warehouse_id,
    zone_id,
    aisle_id,
    rack_id,
    shelf_id,
    location,
    inbound_type,
    entry_date,
    min_stock,
    status,
    batch_number,
    description,
    created_at,
    updated_at,
  } = data;

  return (
    <div className="p-6 space-y-6" dir="rtl">
      <h1 className="text-2xl font-semibold mb-4">جزئیات محصول</h1>

      <Card className="border border-border">
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Detail label="کد قطعه" value={part_code} />
            <Detail label="نام قطعه" value={part_name} />
            <Detail label="واحد" value={unit} />
            <Detail label="موجودی فعلی" value={`${stock} ${unit}`} />
            <Detail label="حداقل موجودی" value={min_stock} />
            <Detail
              label="قیمت واحد"
              value={`${Number(unit_price).toLocaleString()} ریال`}
            />
            <Detail
              label="ارزش کل"
              value={`${Number(total_value).toLocaleString()} ریال`}
            />
            <Detail label="شماره بچ" value={batch_number || "-"} />
            <Detail label="نوع ورود" value={inbound_type} />
            <Detail
              label="تاریخ ورود"
              value={new Date(entry_date).toLocaleDateString("fa-IR")}
            />
            <Detail label="موقعیت مکانی" value={location} />
            <Detail label="شناسه تأمین‌کننده" value={supplier_id} />
            <Detail label="شناسه دسته‌بندی" value={category_id} />
            <Detail label="زیر‌دسته" value={subcategory_id} />
            <Detail label="انبار" value={warehouse_id} />
            <Detail label="زون" value={zone_id} />
            <Detail label="راهرو" value={aisle_id} />
            <Detail label="رک" value={rack_id} />
            <Detail label="قفسه" value={shelf_id} />
            <div>
              <span className="text-muted-foreground">وضعیت:</span>
              <Badge
                className={`ml-2 ${
                  status === "available"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {status === "available" ? "موجود" : "ناموجود"}
              </Badge>
            </div>
          </div>

          {description && (
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground mb-1">توضیحات:</p>
              <p>{description}</p>
            </div>
          )}

          <div className="text-xs text-muted-foreground pt-4 border-t border-border">
            <p>ایجاد شده در: {new Date(created_at).toLocaleString("fa-IR")}</p>
            <p>
              آخرین بروزرسانی: {new Date(updated_at).toLocaleString("fa-IR")}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex flex-col border border-border rounded-xl p-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-medium text-primary mt-1">{value || "-"}</span>
    </div>
  );
}
