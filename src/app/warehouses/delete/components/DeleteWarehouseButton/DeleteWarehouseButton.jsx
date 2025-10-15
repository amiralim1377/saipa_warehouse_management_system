"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import deleteWarehouse from "../../actions/deleteWarehouse";
import { toast } from "react-toastify";

function DeleteWarehouseButton({ warehouseId }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    try {
      const result = await deleteWarehouse(warehouseId);

      if (result.status === "success") {
        toast.success(result.message);
        setOpen(false);
        startTransition(() => {
          router.refresh();
        });
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.error("حذف انبار با خطا مواجه شد:", err);
      toast.error("مشکلی در حذف انبار پیش آمد. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="destructive"
          className="px-3 py-1 text-xs sm:text-sm"
        >
          حذف
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md text-right">
        <DialogHeader>
          <DialogTitle>حذف انبار</DialogTitle>
          <DialogDescription className="text-right">
            آیا مطمئن هستید که می‌خواهید این انبار را حذف کنید؟ این عمل غیرقابل
            بازگشت است.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            انصراف
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "در حال حذف..." : "تایید حذف"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteWarehouseButton;
