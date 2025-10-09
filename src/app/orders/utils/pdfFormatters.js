// تبدیل اعداد به فارسی
export const toPersianDigits = (val) =>
  val?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) ?? "";

// کوتاه کردن UUID یا شناسه‌های طولانی
export const shortId = (id) => (id ? id.toString().slice(0, 8) : "");

// فرمت عددی
export const formatNumberFa = (n) =>
  typeof n === "number"
    ? toPersianDigits(n.toLocaleString("fa-IR"))
    : toPersianDigits(n);

// فرمت پولی
export const formatCurrencyFa = (n) => `${formatNumberFa(n)} تومان`;

// تاریخ شمسی/فارسی
export const formatDateFa = (dateStr) =>
  toPersianDigits(new Date(dateStr).toLocaleDateString("fa-IR"));

// زمان فارسی
export const formatTimeFa = (dateStr) =>
  toPersianDigits(
    new Date(dateStr).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );
