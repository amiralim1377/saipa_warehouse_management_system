import Image from "next/image";

function SaipaLogoContainer() {
  return (
    <Image
      src={"/saipa.png"}
      width={32}
      height={32}
      alt="لوگوی سایپا"
      className="object-contain"
    />
  );
}

export default SaipaLogoContainer;
