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

function ApproveItemButton({ itemId, itemType, approveFunction, onApproved }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleApprove = async () => {
    try {
      const result = await approveFunction(itemId);
      if (result.status === 200) {
        toast.success(result.message || `${itemType} با موفقیت تایید شد`);
        onApproved?.(result);
        setOpen(false);
      } else throw new Error(result.message);
      startTransition(() => router.refresh());
    } catch (err) {
      toast.error(
        err?.message || `خطا در تایید ${itemType}، لطفاً دوباره تلاش کنید.`
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-green-600 text-white hover:bg-green-500 font-medium px-4 py-2 rounded-md shadow-sm transition-colors duration-200"
        >
          تایید
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md text-right p-6 rounded-lg shadow-lg border border-border bg-card">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold mb-2 text-foreground">
            تایید {itemType}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm mb-4">
            آیا مطمئن هستید که می‌خواهید این {itemType} را تایید کنید؟
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-3 mt-4">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-md border border-border hover:bg-muted/10"
          >
            انصراف
          </Button>
          <Button
            onClick={handleApprove}
            disabled={isPending}
            className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isPending ? "در حال تایید..." : `تایید ${itemType}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ApproveItemButton;
