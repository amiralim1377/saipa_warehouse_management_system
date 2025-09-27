import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function ProductCategoryFilter() {
  return (
    <aside className="  border-l border bg-background sticky top-0 p-4 space-y-6 overflow-y-auto">
      <div>
        <h2 className="font-bold mb-2">موتور</h2>
        <div className="space-y-2">
          {["روغن موتور", "تسمه تایم", "فیلتر هوا", "شمع", "پمپ بنزین"].map(
            (part) => (
              <div key={part} className="flex items-center gap-2">
                <Checkbox id={part} />
                <Label htmlFor={part}>{part}</Label>
              </div>
            )
          )}
        </div>
      </div>

      {/* سیستم ترمز */}
      <div>
        <h2 className="font-bold mb-2">سیستم ترمز</h2>
        <div className="space-y-2">
          {["لنت ترمز", "دیسک ترمز", "روغن ترمز", "بوستر ترمز"].map((part) => (
            <div key={part} className="flex items-center gap-2">
              <Checkbox id={part} />
              <Label htmlFor={part}>{part}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* سیستم تعلیق */}
      <div>
        <h2 className="font-bold mb-2">سیستم تعلیق</h2>
        <div className="space-y-2">
          {["کمک فنر", "طبق", "بوش‌ها", "میل تعادل"].map((part) => (
            <div key={part} className="flex items-center gap-2">
              <Checkbox id={part} />
              <Label htmlFor={part}>{part}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* قیمت */}
      <div>
        <h2 className="font-bold mb-2">قیمت</h2>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      <Button className="w-full">اعمال فیلتر</Button>
    </aside>
  );
}
