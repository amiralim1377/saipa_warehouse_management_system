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

export function AisleSelect({
  control,
  name = "aisle",
  aisles,
  aislesLoading,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>راهرو</Label>
          <Select
            {...field}
            onValueChange={(val) => field.onChange(val)}
            disabled={aislesLoading || !aisles?.length}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="انتخاب راهرو" />
            </SelectTrigger>
            <SelectContent>
              {aisles?.map((aisle) => (
                <SelectItem key={aisle.id} value={aisle.id}>
                  {aisle.name}
                </SelectItem>
              ))}
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

// import React, { useState, useEffect } from "react";
// import { Controller } from "react-hook-form";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";

// export function AisleSelect({
//   control,
//   name = "aisle",
//   aisles = [],
//   aislesLoading,
//   rules,
// }) {
//   const [key, setKey] = useState(0);

//   const isDisabled = aislesLoading || aisles.length === 0;
//   const placeholder =
//     aisles.length === 0 ? "تمام راهروها پر هستند" : "انتخاب راهرو";

//   // وقتی لیست راهروها تغییر کرد، Select ریست شود
//   useEffect(() => {
//     setKey((prev) => prev + 1);
//   }, [aisles]);

//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={rules}
//       render={({ field, fieldState }) => (
//         <div>
//           <Label htmlFor={name}>راهرو</Label>

//           <Select
//             key={key}
//             {...field}
//             onValueChange={(val) => field.onChange(val)}
//             disabled={isDisabled}
//             value={field.value ?? undefined} // undefined باعث نمایش placeholder می‌شود
//           >
//             <SelectTrigger id={name} className="w-full">
//               <SelectValue placeholder={placeholder} />
//             </SelectTrigger>

//             <SelectContent>
//               {aisles.length > 0 ? (
//                 aisles
//                   .sort((a, b) => {
//                     const numA = parseInt(a.name.replace(/\D/g, ""), 10);
//                     const numB = parseInt(b.name.replace(/\D/g, ""), 10);
//                     return numA - numB;
//                   })
//                   .map((aisle) => (
//                     <SelectItem
//                       key={aisle.id}
//                       value={aisle.id}
//                       disabled={aisle.isFull} // راهرو پر غیرفعال شود
//                     >
//                       {aisle.name} {aisle.isFull ? "(پر است)" : ""}
//                     </SelectItem>
//                   ))
//               ) : (
//                 <SelectItem value="no_aisles" disabled>
//                   تمام راهروها پر هستند
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
