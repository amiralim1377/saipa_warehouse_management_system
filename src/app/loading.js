import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--color-background)]/80 z-50">
      <div className="relative h-24 w-24 mb-4">
        <Image
          src="/SAIPA-logo.png"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
        />
      </div>
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[var(--color-primary)] mb-4"></div>
      <span className="sr-only">در حال بارگذاری...</span>
    </div>
  );
}
