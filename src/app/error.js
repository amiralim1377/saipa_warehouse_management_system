"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">خطا رخ داده است</h1>
      <p className="mb-6">{error.message}</p>
      <div className="flex gap-2">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          تلاش مجدد
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
