"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function DeleteItemButton({ itemId, itemType, deleteFunction }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    try {
      await deleteFunction(itemId);
      setOpen(false);
      startTransition(() => {
        router.refresh();
      });
    } catch (err) {
      toast.error(`خطا در حذف ${itemType}، لطفاً دوباره تلاش کنید.`);
      toast.error(`حذف ${itemType} با خطا مواجه شد:, ${err.message}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive">
          حذف
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md text-right">
        <DialogHeader>
          <DialogTitle>حذف {itemType}</DialogTitle>
          <DialogDescription className={"text-right"}>
            آیا مطمئن هستید که می‌خواهید این {itemType} را حذف کنید؟ این عمل
            غیرقابل بازگشت است.
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
            {isPending ? "در حال حذف..." : `تایید حذف ${itemType}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteItemButton;
