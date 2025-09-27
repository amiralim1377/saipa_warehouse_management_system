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

        {/* دکمه‌ها و پروفایل */}
        <div className="flex items-center gap-3">
          {/* dark mode/light mode */}
          <ModeToggle />

          {/* UserProfile */}
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
