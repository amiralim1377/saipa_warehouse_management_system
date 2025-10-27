import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">صفحه پیدا نشد</h1>
      <p className="mb-6">متأسفیم، صفحه‌ای که دنبال آن هستید وجود ندارد.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
