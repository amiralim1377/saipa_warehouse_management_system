import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function SuppliersNewPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        افزودن تأمین‌کننده جدید
      </h1>

      <form className="space-y-4">
        {/* نام تأمین‌کننده */}
        <div>
          <Label htmlFor="name">نام تأمین‌کننده</Label>
          <Input id="name" placeholder="نام تأمین‌کننده را وارد کنید" />
        </div>

        {/* شماره تماس */}
        <div>
          <Label htmlFor="phone">شماره تماس</Label>
          <Input id="phone" placeholder="مثلاً 09123456789" />
        </div>

        {/* ایمیل */}
        <div>
          <Label htmlFor="email">ایمیل</Label>
          <Input id="email" type="email" placeholder="مثلاً example@mail.com" />
        </div>

        {/* آدرس */}
        <div>
          <Label htmlFor="address">آدرس</Label>
          <Input id="address" placeholder="آدرس تأمین‌کننده" />
        </div>

        {/* توضیحات */}
        <div>
          <Label htmlFor="description">توضیحات</Label>
          <Textarea id="description" placeholder="توضیحات اضافی (اختیاری)" />
        </div>

        {/* دکمه‌ها */}
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

export default SuppliersNewPage;
