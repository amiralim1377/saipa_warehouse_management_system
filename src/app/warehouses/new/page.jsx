import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function WarehousesNewPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        تعریف انبار جدید
      </h1>

      <form className="space-y-4">
        <div>
          <Label htmlFor="name">نام انبار</Label>
          <Input id="name" placeholder="نام انبار را وارد کنید" />
        </div>

        <div>
          <Label htmlFor="location">مکان / آدرس</Label>
          <Input id="location" placeholder="مثلاً تهران، میدان آزادی" />
        </div>

        <div>
          <Label htmlFor="capacity">ظرفیت کل</Label>
          <Input id="capacity" type="number" placeholder="مثلاً 1000" />
        </div>

        <div>
          <Label htmlFor="minStock">حداقل موجودی هشدار</Label>
          <Input id="minStock" type="number" placeholder="مثلاً 50" />
        </div>

        <div>
          <Label htmlFor="description">توضیحات</Label>
          <Textarea id="description" placeholder="اختیاری" />
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
          >
            ثبت
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

export default WarehousesNewPage;
