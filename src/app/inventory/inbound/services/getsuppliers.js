// import { supabase } from "@/lib/supabaseClient";

// export const getSuppliers = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("suppliers")
//       .select("*")
//       .match({ status: true })
//       .order("name", { ascending: true });

//     if (error) throw new Error(error.message);
//     return data;
//   } catch (err) {
//     console.error("Unexpected error:", err);
//     return [];
//   }
// };

"use server";
import prisma from "@/lib/prismaClient";

export const getSuppliers = async () => {
  try {
    const data = await prisma.suppliers.findMany({
      where: {
        status: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    const safeData = JSON.parse(JSON.stringify(data));

    return safeData;
  } catch (err) {
    console.error("خطا در دریافت تأمین‌کننده‌ها:", err);
    return [];
  }
};
