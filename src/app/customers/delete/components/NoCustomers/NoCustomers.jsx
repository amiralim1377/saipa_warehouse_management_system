"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function NoCustomers() {
  return (
    <div className="flex w-full mx-auto flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center max-w-2xl mx-auto w-full justify-center py-16 border text-card-foreground rounded-lg shadow-sm">
        <p className="text-lg font-medium text-muted-foreground mb-6">
          هیچ مشتری یافت نشد 🚫
        </p>
        <Link href="/suppliers/new">
          <Button className="bg-primary text-primary-foreground hover:opacity-90 transition">
            ایجاد مشتری جدید
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NoCustomers;
