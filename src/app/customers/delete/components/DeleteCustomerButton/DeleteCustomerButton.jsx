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
import deleteCustomer from "../../actions/deleteCustomers";
function DeleteCustomerButton({ customerId, onDeleted }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    try {
      await deleteCustomer(customerId);

      setOpen(false);

      startTransition(() => {
        router.refresh();
        if (onDeleted) onDeleted();
      });
    } catch (err) {
      console.error("حذف مشتری با خطا مواجه شد:", err);
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
          <DialogTitle>حذف مشتری</DialogTitle>
          <DialogDescription className="text-right">
            آیا مطمئن هستید که می‌خواهید این مشتری را حذف کنید؟ این عمل غیرقابل
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

export default DeleteCustomerButton;
