import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function OutboundDetailsCard({ data }) {
  if (!data) return <div>هیچ داده‌ای یافت نشد.</div>;

  const {
    part_code,
    part_name,
    quantity,
    unit,
    batch_number,
    customer_name,
    order_number,
    description,
    warehouse_name,
    zone_name,
    aisle_name,
    rack_name,
    shelf_name,
    unit_price,
    total_value,
    created_at,
  } = data;

  return (
    <div className="p-6 space-y-6" dir="rtl">
      <h1 className="text-2xl font-semibold mb-4">جزئیات خروج کالا</h1>

      <Card className="border border-border">
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Detail label="کد قطعه" value={part_code} />
            <Detail label="نام قطعه" value={part_name} />
            <Detail label="تعداد خروجی" value={`${quantity} ${unit}`} />
            <Detail
              label="قیمت واحد"
              value={`${Number(unit_price).toLocaleString("fa-IR")} تومان`}
            />
            <Detail
              label="ارزش کل"
              value={`${Number(total_value).toLocaleString("fa-IR")} تومان`}
            />
            <Detail label="شماره بچ" value={batch_number || "-"} />
            <Detail label="سفارش شماره" value={order_number || "-"} />
            <Detail label="مشتری" value={customer_name || "-"} />
            <Detail label="انبار" value={warehouse_name} />
            <Detail label="زون" value={zone_name} />
            <Detail label="راهرو" value={aisle_name} />
            <Detail label="رک" value={rack_name} />
            <Detail label="طبقه" value={shelf_name} />
            <Detail
              label="موقعیت مکانی"
              value={`${warehouse_name} / ${zone_name} / ${aisle_name} / ${rack_name} / ${shelf_name}`}
            />
          </div>

          {description && (
            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground mb-1">توضیحات:</p>
              <p>{description}</p>
            </div>
          )}

          <div className="text-xs text-muted-foreground pt-4 border-t border-border">
            <p>تاریخ خروج: {new Date(created_at).toLocaleString("fa-IR")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default OutboundDetailsCard;

function Detail({ label, value }) {
  return (
    <div className="flex flex-col border border-border rounded-xl p-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-medium text-primary mt-1">{value || "-"}</span>
    </div>
  );
}
