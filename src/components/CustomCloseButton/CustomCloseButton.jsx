"use client";

import SaipaLogoContainer from "../SaipaLogoContainer/SaipaLogoContainer";

const CustomCloseButton = ({ closeToast, saipaLogo }) => {
  return (
    <button
      aria-label="remove"
      type="button"
      onClick={() => closeToast(true)}
      className="absolute top-1/2 left-4 -translate-y-1/2 z-50"
    >
      <SaipaLogoContainer />
    </button>
  );
};

export default CustomCloseButton;
