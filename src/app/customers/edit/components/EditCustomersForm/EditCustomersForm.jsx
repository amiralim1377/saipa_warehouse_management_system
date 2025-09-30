"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function EditCustomersForm() {
  return (
    <div className="max-w-lg mx-auto p-6 border rounded-md shadow-sm space-y-4">
      <h2 className="text-lg font-semibold mb-4 text-right">ویرایش مشتری</h2>

      <div className="space-y-2">
        <Input placeholder="نام" className="text-right" />
        <Input placeholder="نام خانوادگی" className="text-right" />
        <Input placeholder="شماره موبایل" className="text-right" />
        <Input placeholder="ایمیل" className="text-right" />
        <Input placeholder="شهر" className="text-right" />
        <Input placeholder="استان" className="text-right" />
        <Input placeholder="آدرس" className="text-right" />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="outline">انصراف</Button>
        <Button>ذخیره تغییرات</Button>
      </div>
    </div>
  );
}

export default EditCustomersForm;
