import jalaali from "jalaali-js";

const formatJalaaliDate = (gregorianDate) => {
  if (!gregorianDate) return "";
  const date = new Date(gregorianDate);
  const { jy, jm, jd } = jalaali.toJalaali(date);

  // فرمت یکنواخت yyyy/mm/dd
  return `${jy}/${jm.toString().padStart(2, "0")}/${jd
    .toString()
    .padStart(2, "0")}`;
};

export default formatJalaaliDate;
