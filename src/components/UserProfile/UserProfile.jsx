"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-3">
      {/* اطلاعات کاربر (Desktop: md+) */}
      <div className="hidden md:flex flex-col text-right">
        <p className="text-sm font-medium text-foreground">امیرعلی مرادی نیا</p>
        <p className="text-xs text-muted-foreground">مدیر انبار مرکزی</p>
      </div>

      {/* آواتار + مودال */}
      <Dialog>
        <DialogTrigger asChild>
          <Avatar className="h-10 w-10 cursor-pointer flex-shrink-0">
            <AvatarImage src="/user.jpg" alt="امیرعلی مرادی نیا" />
            <AvatarFallback className="bg-primary text-primary-foreground font-medium">
              ا.م
            </AvatarFallback>
          </Avatar>
        </DialogTrigger>

        <DialogContent
          aria-describedby={undefined}
          className="w-[95vw] max-w-sm sm:max-w-md md:max-w-lg max-h-[90vh] p-0 bg-background rounded-lg overflow-hidden
                     transition-transform duration-200 ease-out data-[state=open]:scale-100 data-[state=closed]:scale-95"
        >
          {/* هدر مودال */}
          <DialogHeader className="relative flex items-center justify-between p-3 border-b">
            <DialogTitle className="text-sm font-medium text-foreground">
              پروفایل کاربر
            </DialogTitle>

            <DialogClose
              aria-label="بستن"
              className="ml-3 rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-muted/20 transition"
            >
              ✕
            </DialogClose>
          </DialogHeader>

          {/* محتوای مودال: تصویر */}
          <div className="relative w-full h-[60vw] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black/5">
            <Image
              src="/user.jpg"
              alt="امیرعلی مرادی نیا"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 420px"
              className="object-contain bg-background"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
