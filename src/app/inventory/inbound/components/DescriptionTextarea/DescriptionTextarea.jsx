import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DescriptionTextarea = ({ register }) => {
  return (
    <div>
      <Label htmlFor="description">توضیحات</Label>
      <Textarea
        id="description"
        {...register("description")}
        placeholder="در صورت نیاز توضیح وارد کنید"
      />
    </div>
  );
};

export default DescriptionTextarea;
