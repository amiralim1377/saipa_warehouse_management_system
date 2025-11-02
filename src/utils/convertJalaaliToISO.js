import { toGregorian } from "jalaali-js";

export function convertJalaaliToISO(jalaliDateStr) {
  // تبدیل اعداد فارسی/عربی به انگلیسی
  const normalized = jalaliDateStr.replace(
    /[۰-۹٠-٩]/g,
    (d) => "۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩".indexOf(d) % 10
  );

  // جدا کردن تاریخ و زمان
  const [datePart, timePart = "0:0:0"] = normalized.split(" ");
  const [jy, jm, jd] = datePart.split("/").map(Number);

  // تبدیل به میلادی
  const { gy, gm, gd } = toGregorian(jy, jm, jd);

  // استخراج ساعت/دقیقه/ثانیه/میلی‌ثانیه
  const [hh, mm, ssms] = timePart.split(":");
  const [ss = "0", ms = "0"] = String(ssms ?? "0").split(".");

  // ساختن Date به‌صورت UTC
  return new Date(
    Date.UTC(gy, gm - 1, gd, Number(hh), Number(mm), Number(ss), Number(ms))
  );
}

export default convertJalaaliToISO;
