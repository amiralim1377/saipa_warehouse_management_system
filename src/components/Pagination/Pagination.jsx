"use client";
import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2 mt-4 font-yekanbakh">
      {/* Previous */}
      {currentPage > 1 && (
        <Link
          href={`/products?page=${currentPage - 1}`}
          className="px-3 py-1 rounded bg-[var(--color-muted)] text-[var(--color-foreground)]"
        >
          قبلی
        </Link>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={`/products?page=${page}`}
          className={`px-3 py-1 rounded ${
            page === currentPage
              ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
              : "bg-[var(--color-muted)] text-[var(--color-foreground)]"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next */}
      {currentPage < totalPages && (
        <Link
          href={`/products?page=${currentPage + 1}`}
          className="px-3 py-1 rounded bg-[var(--color-muted)] text-[var(--color-foreground)]"
        >
          بعدی
        </Link>
      )}
    </div>
  );
}
