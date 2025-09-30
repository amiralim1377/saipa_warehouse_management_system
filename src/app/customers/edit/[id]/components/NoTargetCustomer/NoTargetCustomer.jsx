"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function NoTargetCustomer() {
  const router = useRouter();

  return (
    <div className="text-center py-10 space-y-4">
      <p className="text-destructive text-lg font-semibold">
        مشتری مورد نظر یافت نشد 🚫
      </p>
      <p className="text-muted-foreground">
        ممکن است مشتری حذف شده باشد یا شناسه اشتباه وارد شده باشد.
      </p>
      <Button onClick={() => router.push("/customers")} className="mt-2">
        بازگشت به لیست مشتریان
      </Button>
    </div>
  );
}

export default NoTargetCustomer;
