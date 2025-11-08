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

const WarehouseSelect = ({
  control,
  name = "warehouse",
  rules,
  errors,
  warehouses = [],
  label = "انبار",
  placeholder = "انتخاب انبار",
  disabled = false,
  selectClass = "w-full",
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Select
              onValueChange={field.onChange}
              value={field.value ?? ""}
              disabled={disabled || !warehouses?.length}
            >
              <SelectTrigger id={name} className={selectClass}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {warehouses?.map((w) => (
                  <SelectItem key={w.id} value={w.id}>
                    {w.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && (
              <p className="text-destructive text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default WarehouseSelect;

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

// const WarehouseSelect = ({
//   control,
//   name = "warehouse",
//   rules,
//   errors,
//   warehouses = [],
//   label = "انبار",
//   placeholder = "انتخاب انبار",
//   disabled = false,
//   selectClass = "w-full",
// }) => {
//   const [key, setKey] = useState(0);

//   const isDisabled = disabled || warehouses.length === 0;
//   const currentPlaceholder =
//     warehouses.length === 0 ? "تمام انبارها پر هستند" : placeholder;

//   // وقتی لیست تغییر کرد، Select ریست شود تا placeholder آپدیت شود
//   useEffect(() => {
//     setKey((prev) => prev + 1);
//   }, [warehouses]);

//   return (
//     <div>
//       <Label htmlFor={name}>{label}</Label>

//       <Controller
//         name={name}
//         control={control}
//         rules={rules}
//         render={({ field, fieldState }) => (
//           <>
//             <Select
//               key={key} // ریست کامل Select
//               onValueChange={field.onChange}
//               value={field.value ?? undefined} // undefined برای نمایش placeholder
//               disabled={isDisabled}
//             >
//               <SelectTrigger id={name} className={selectClass}>
//                 <SelectValue placeholder={currentPlaceholder} />
//               </SelectTrigger>
//               <SelectContent>
//                 {warehouses.length > 0 ? (
//                   warehouses.map((w) => (
//                     <SelectItem
//                       key={w.id}
//                       value={w.id}
//                       disabled={w.isFull} // اگر انبار پر است غیرفعال شود
//                     >
//                       {w.name} {w.isFull ? "(پر است)" : ""}
//                     </SelectItem>
//                   ))
//                 ) : (
//                   <SelectItem value="no_warehouses" disabled>
//                     تمام انبارها پر هستند
//                   </SelectItem>
//                 )}
//               </SelectContent>
//             </Select>

//             {fieldState.error && (
//               <p className="text-destructive text-sm mt-1">
//                 {fieldState.error.message}
//               </p>
//             )}
//           </>
//         )}
//       />
//     </div>
//   );
// };

// export default WarehouseSelect;
