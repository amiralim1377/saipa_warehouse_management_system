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

export function ZoneSelect({
  control,
  name = "zone",
  zones,
  zonesLoading,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>زون</Label>
          <Select
            {...field}
            onValueChange={(val) => field.onChange(val)}
            disabled={zonesLoading || !zones?.length}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="انتخاب زون" />
            </SelectTrigger>
            <SelectContent>
              {[...zones]
                .sort((a, b) => {
                  const numA = parseInt(a.name.replace(/\D/g, ""), 10);
                  const numB = parseInt(b.name.replace(/\D/g, ""), 10);
                  return numA - numB;
                })
                .map((zone) => (
                  <SelectItem key={zone.id} value={zone.id}>
                    {zone.name}
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

// export function ZoneSelect({
//   control,
//   name = "zone",
//   zones = [],
//   zonesLoading,
//   rules,
// }) {
//   const [key, setKey] = useState(0);

//   const isDisabled = zonesLoading || zones.length === 0;
//   const placeholder =
//     zones.length === 0 ? "تمام زون‌ها پر هستند" : "انتخاب زون";

//   // وقتی لیست زون‌ها تغییر کرد، Select ریست شود
//   useEffect(() => {
//     setKey((prev) => prev + 1);
//   }, [zones]);

//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={rules}
//       render={({ field, fieldState }) => (
//         <div>
//           <Label htmlFor={name}>زون</Label>

//           <Select
//             key={key}
//             {...field}
//             onValueChange={(val) => field.onChange(val)}
//             disabled={isDisabled}
//             value={field.value ?? undefined}
//           >
//             <SelectTrigger id={name} className="w-full">
//               <SelectValue placeholder={placeholder} />
//             </SelectTrigger>

//             <SelectContent>
//               {zones.length > 0 ? (
//                 zones
//                   .sort((a, b) => {
//                     const numA = parseInt(a.name.replace(/\D/g, ""), 10);
//                     const numB = parseInt(b.name.replace(/\D/g, ""), 10);
//                     return numA - numB;
//                   })
//                   .map((zone) => (
//                     <SelectItem
//                       key={zone.id}
//                       value={zone.id}
//                       disabled={zone.isFull} // اگر پر باشد غیرقابل انتخاب
//                     >
//                       {zone.name} {zone.isFull ? "(پر است)" : ""}
//                     </SelectItem>
//                   ))
//               ) : (
//                 <SelectItem value="no_zones" disabled>
//                   تمام زون‌ها پر هستند
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
