import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function WarehousesEditPage() {
  // فرض کن داده انبار از API یا state گرفته شده
  const warehouseData = {
    name: "انبار الف",
    location: "تهران، میدان آزادی",
    capacity: 1000,
    minStock: 50,
    description: "انبار مرکزی",
  };

  return (
    <div className="p-6 max-w-2xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        ویرایش اطلاعات انبار
      </h1>

      <form className="space-y-4">
        <div>
          <Label htmlFor="name">نام انبار</Label>
          <Input id="name" defaultValue={warehouseData.name} />
        </div>

        <div>
          <Label htmlFor="location">مکان / آدرس</Label>
          <Input id="location" defaultValue={warehouseData.location} />
        </div>

        <div>
          <Label htmlFor="capacity">ظرفیت کل</Label>
          <Input
            id="capacity"
            type="number"
            defaultValue={warehouseData.capacity}
          />
        </div>

        <div>
          <Label htmlFor="minStock">حداقل موجودی هشدار</Label>
          <Input
            id="minStock"
            type="number"
            defaultValue={warehouseData.minStock}
          />
        </div>

        <div>
          <Label htmlFor="description">توضیحات</Label>
          <Textarea id="description" defaultValue={warehouseData.description} />
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
          >
            ثبت تغییرات
          </Button>
          <Button
            type="button"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg"
          >
            لغو
          </Button>
        </div>
      </form>
    </div>
  );
}

export default WarehousesEditPage;
