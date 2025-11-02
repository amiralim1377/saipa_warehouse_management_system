"use server";

import prisma from "@/lib/prismaClient";

export const editProductDetails = async ({ updatedPart, id }) => {
  try {
    // بررسی ارسال شناسه
    if (!id) {
      return {
        success: false,
        message: "شناسه محصول ارسال نشده است.",
      };
    }

    // بررسی اینکه آبجکت آپدیت خالی نباشد
    if (!updatedPart) {
      return {
        success: false,
        message: "اطلاعات محصول ارسال نشده است.",
      };
    }

    // آپدیت محصول
    const updatedProduct = await prisma.parts_inventory.update({
      where: { id },
      data: {
        inbound_type: updatedPart.inbound_type,
        part_code: updatedPart.part_code,
        part_name: updatedPart.part_name,
        stock: Number(updatedPart.stock),
        status: updatedPart.status,
        category_id: updatedPart.category_id,
        subcategory_id: updatedPart.subcategory_id,
        unit: updatedPart.unit,
        warehouse_id: updatedPart.warehouse_id,
        zone_id: updatedPart.zone_id,
        aisle_id: updatedPart.aisle_id,
        rack_id: updatedPart.rack_id,
        shelf_id: updatedPart.shelf_id,
        supplier_id: updatedPart.supplier_id,
        location: updatedPart.location,
        entry_date: updatedPart.entry_date, // باید ISO یا Date معتبر باشد
        unit_price: Number(updatedPart.unit_price),
        min_stock: Number(updatedPart.min_stock),
        description: updatedPart.description || "",
        total_value:
          Number(updatedPart.total_value) ||
          Number(updatedPart.stock) * Number(updatedPart.unit_price),
        updated_at: new Date(),
      },
    });

    return {
      success: true,
      message: "محصول با موفقیت به‌روزرسانی شد.",
      data: updatedProduct,
    };
  } catch (error) {
    console.error("❌ خطا در به‌روزرسانی محصول:", error);

    let errorMessage = "خطا در به‌روزرسانی محصول رخ داد.";

    // بررسی خطاهای خاص Prisma
    if (error.code === "P2025") {
      errorMessage = "محصول مورد نظر یافت نشد.";
    } else if (error.code === "P2002") {
      errorMessage = "مقدار تکراری برای یکی از فیلدهای یکتا یافت شد.";
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
};

export default editProductDetails;
