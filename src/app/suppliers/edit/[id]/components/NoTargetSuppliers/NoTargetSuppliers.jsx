"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "react-toastify";

function NoTargetSuppliers({ message = "خطا در دریافت تأمین‌کننده" }) {
  const router = useRouter();

  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center py-10 space-y-4">
        <p className="text-destructive text-lg font-semibold">
          تأمین‌کننده مورد نظر یافت نشد 🚫
        </p>
        <p className="text-muted-foreground">
          ممکن است تأمین‌کننده حذف شده باشد یا شناسه اشتباه وارد شده باشد.
        </p>
        <Button onClick={() => router.push("/suppliers")} className="mt-2">
          بازگشت به لیست تأمین‌کنندگان
        </Button>
      </div>
    </div>
  );
}

export default NoTargetSuppliers;
