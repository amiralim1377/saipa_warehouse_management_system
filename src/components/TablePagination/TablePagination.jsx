"use client";

import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (!onPageChange) {
    console.warn("⚠️ onPageChange is not defined!");
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <UIPagination className="mt-4 flex justify-center gap-1">
      <PaginationPrevious
        onClick={() =>
          onPageChange && onPageChange(Math.max(1, currentPage - 1))
        }
        disabled={currentPage === 1}
      />
      <PaginationContent>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === currentPage}
              onClick={() => onPageChange && onPageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
      <PaginationNext
        onClick={() =>
          onPageChange && onPageChange(Math.min(totalPages, currentPage + 1))
        }
        disabled={currentPage === totalPages}
      />
    </UIPagination>
  );
}
