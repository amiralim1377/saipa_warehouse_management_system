import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function WarehousesTrackPage() {
  const warehouses = [
    { id: 1, name: "انبار الف" },
    { id: 2, name: "انبار ب" },
  ];

  const inventoryItems = [
    {
      id: 1,
      name: "قطعه ۱",
      type: "قطعه",
      category: "غذای اصلی",
      quantity: 5,
      location: "راهرو ۱، قفسه ۲",
      lowStock: true,
    },
    {
      id: 2,
      name: "ماشین ۱",
      type: "ماشین",
      category: "خط تولید",
      quantity: 2,
      location: "راهرو ۳، قفسه ۵",
      lowStock: false,
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        رهگیری موجودی ماشین‌ها و قطعات
      </h1>

      {/* فیلترها */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <div className="w-60">
          <Label htmlFor="warehouse">انتخاب انبار</Label>
          <Select>
            <SelectTrigger id="warehouse" className="w-full">
              <SelectValue placeholder="انتخاب انبار" />
            </SelectTrigger>
            <SelectContent>
              {warehouses.map((wh) => (
                <SelectItem key={wh.id} value={wh.id}>
                  {wh.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-60">
          <Label htmlFor="inventoryType">نوع موجودی</Label>
          <Select>
            <SelectTrigger id="inventoryType" className="w-full">
              <SelectValue placeholder="ماشین / قطعه" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ماشین">ماشین</SelectItem>
              <SelectItem value="قطعه">قطعه</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Label htmlFor="search">جستجوی نام</Label>
          <Input id="search" placeholder="نام ماشین یا قطعه" />
        </div>

        <Button className="bg-primary text-primary-foreground mt-6 px-6 py-3 rounded-lg">
          اعمال فیلتر
        </Button>
      </div>

      {/* جدول رهگیری */}
      <table className="w-full text-right border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-2 border-b">نام</th>
            <th className="p-2 border-b">نوع موجودی</th>
            <th className="p-2 border-b">دسته‌بندی</th>
            <th className="p-2 border-b">تعداد موجود</th>
            <th className="p-2 border-b">مکان دقیق</th>
            <th className="p-2 border-b">وضعیت موجودی</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((item) => (
            <tr
              key={item.id}
              className={item.lowStock ? "bg-destructive/10" : ""}
            >
              <td className="p-2 border-b">{item.name}</td>
              <td className="p-2 border-b">{item.type}</td>
              <td className="p-2 border-b">{item.category}</td>
              <td className="p-2 border-b">{item.quantity}</td>
              <td className="p-2 border-b">{item.location}</td>
              <td className="p-2 border-b">
                {item.lowStock ? "کمتر از حداقل" : "موجود"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WarehousesTrackPage;
