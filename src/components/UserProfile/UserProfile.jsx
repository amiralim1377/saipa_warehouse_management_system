"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <p className="text-sm font-medium text-foreground">امیرعلی مرادی نیا</p>
        <p className="text-xs text-muted-foreground">مدیر انبار مرکزی</p>
      </div>

      {/* Trigger مودال */}
      <Dialog>
        <DialogTrigger asChild>
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src="/user.jpg" alt="احمد محمدی" />
            <AvatarFallback className="bg-primary text-primary-foreground font-medium">
              ا.م
            </AvatarFallback>
          </Avatar>
        </DialogTrigger>

        {/* محتوی مودال */}
        <DialogContent className="sm:max-w-[400px] w-full p-0 bg-transparent shadow-none">
          <DialogHeader className="p-0">
            <DialogClose className="absolute top-2 right-2 text-white text-xl font-bold" />
          </DialogHeader>

          <div className="relative w-full h-[400px] sm:h-[500px]">
            <Image
              src="/user.jpg"
              alt="احمد محمدی"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
