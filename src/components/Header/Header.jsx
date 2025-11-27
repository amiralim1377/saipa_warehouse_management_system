"use client";

import UserProfile from "@/components/UserProfile/UserProfile";
import ModeToggle from "../ModeToggle/ModeToggle";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-col gap-2 px-4 sm:px-6 py-3 bg-card text-foreground border-b border-border shadow-sm relative">
      {/* Top info text */}
      <div className="text-sm md:text-base mt-1 hidden md:block text-muted-foreground">
        سامانه مدیریت انبارداری و لجستیک سایپا
      </div>

      <div className="flex items-center justify-between relative">
        {/* Desktop brand */}
        <div className="font-bold text-orange-600 text-lg hidden md:block">
          سایپا لجستیک
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile logo centered */}
        <div className="absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/SAIPA-logo.png" width={50} height={50} alt="logo" />
        </div>

        {/* Right section: user + mode toggle */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <UserProfile />
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu open={open} setOpen={setOpen} />

      {/* Optional: Add bottom border for mobile spacing */}
      <div className="block md:hidden border-t border-border mt-2"></div>
    </header>
  );
}
