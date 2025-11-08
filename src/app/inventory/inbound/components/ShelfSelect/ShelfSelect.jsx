"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function ShelfSelect({
  control,
  name = "shelf",
  shelves,
  shelvesLoading,
  rules,
}) {
  const allFull = !shelves || shelves.length === 0;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>طبقه</Label>
          <Select
            {...field}
            onValueChange={(val) => field.onChange(val)}
            disabled={shelvesLoading || allFull}
            value={field.value ?? ""}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="انتخاب طبقه" />
            </SelectTrigger>
            <SelectContent>
              {allFull ? (
                <SelectItem key="full" value="full" disabled>
                  تمام طبقات پر هستند
                </SelectItem>
              ) : (
                shelves.map((shelf) => (
                  <SelectItem key={shelf.id} value={shelf.id}>
                    {shelf.name}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          {fieldState.error && (
            <p className="text-destructive text-sm mt-1">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}

// import React, { useState } from "react";
// import { Controller } from "react-hook-form";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";

// export function ShelfSelect({
//   control,
//   name = "shelf",
//   shelves = [],
//   shelvesLoading,
//   rules,
// }) {
//   // برای ریست placeholder وقتی لیست تغییر می‌کنه
//   const [key, setKey] = useState(0);

//   const isDisabled = shelvesLoading || shelves.length === 0;
//   const placeholder =
//     shelves.length === 0 ? "تمام طبقه‌ها پر هستند" : "انتخاب طبقه";

//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={rules}
//       render={({ field, fieldState }) => (
//         <div>
//           <Label htmlFor={name}>طبقه</Label>

//           <Select
//             key={key} // تغییر key باعث ریست کامل Select می‌شود
//             {...field}
//             onValueChange={(val) => field.onChange(val)}
//             disabled={isDisabled}
//             value={field.value ?? undefined} // undefined باعث نمایش placeholder می‌شود
//           >
//             <SelectTrigger id={name} className="w-full">
//               <SelectValue placeholder={placeholder} />
//             </SelectTrigger>

//             <SelectContent>
//               {shelves.length > 0 ? (
//                 [...shelves]
//                   .sort((a, b) => {
//                     const numA = parseInt(a.name.replace(/\D/g, ""), 10);
//                     const numB = parseInt(b.name.replace(/\D/g, ""), 10);
//                     return numA - numB;
//                   })
//                   .map((shelf) => (
//                     <SelectItem key={shelf.id} value={shelf.id}>
//                       {shelf.name}
//                     </SelectItem>
//                   ))
//               ) : (
//                 <SelectItem value="no_shelves" disabled>
//                   تمام طبقه‌ها پر هستند
//                 </SelectItem>
//               )}
//             </SelectContent>
//           </Select>

//           {fieldState.error && (
//             <p className="text-destructive text-sm mt-1">
//               {fieldState.error.message}
//             </p>
//           )}
//         </div>
//       )}
//     />
//   );
// }
