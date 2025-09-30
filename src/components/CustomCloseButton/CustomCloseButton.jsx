"use client";

import Image from "next/image";

const CustomCloseButton = ({ closeToast }) => {
  return (
    <button
      aria-label="remove"
      type="button"
      onClick={() => closeToast(true)}
      className="absolute top-1/2 left-4 -translate-y-1/2 z-50"
    >
      <Image
        src="/saipa.png"
        width={32}
        height={32}
        alt="لوگوی سایپا"
        className="object-contain"
      />
    </button>
  );
};

export default CustomCloseButton;
