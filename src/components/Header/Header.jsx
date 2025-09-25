import UserProfile from "@/components/UserProfile/UserProfile";
import { Separator } from "../ui/separator";
import ModeToggle from "../ModeToggle/ModeToggle";

export default function Header() {
  return (
    <header className="flex flex-col  gap-2 px-6 py-3 bg-background text-foreground border-b border-border shadow-sm">
      {/* عنوان سامانه */}
      <div className="text-sm  text-muted-foreground">
        سامانه مدیریت انبارداری و لجستیک سایپا
      </div>

      <div className="flex items-center justify-between">
        {/* نام برند */}
        <div className="font-bold text-orange-600 text-lg">سایپالجستیک</div>

        {/* جستجو */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="جستجوی کالا، سفارش، مشتری..."
            className="w-full px-4 py-2 rounded border border-input bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* دکمه‌ها و پروفایل */}
        <div className="flex items-center gap-3">
          {/* دکمه تغییر تم */}
          <button className="px-3 py-1 rounded border border-input bg-card text-card-foreground hover:bg-muted/20 transition-colors">
            تغییر تم
          </button>

          {/* دکمه پیام‌های مدیریتی */}
          <button className="px-3 py-1 rounded border border-input bg-card text-card-foreground hover:bg-muted/20 transition-colors">
            پیام‌های مدیریتی
          </button>

          {/* دکمه‌های مهم */}
          <button className="px-3 py-1 rounded border border-input bg-primary text-primary-foreground hover:bg-primary/80 transition-colors">
            افزودن محصول
          </button>
          <button className="px-3 py-1 rounded border border-input bg-primary text-primary-foreground hover:bg-primary/80 transition-colors">
            سفارش جدید
          </button>
          <Separator orientation="vertical" />
          {/* dark mode/light mode */}
          <ModeToggle />

          {/* UserProfile */}
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
