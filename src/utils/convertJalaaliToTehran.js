import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import jalaali from "jalaali-js";

dayjs.extend(utc);
dayjs.extend(timezone);

const convertJalaaliToTehran = (jalaliDate) => {
  let strDate = String(jalaliDate);

  // اگر فرمت ورودی شبیه Date.toString بود (نه YYYY/MM/DD)
  if (!strDate.includes("/")) {
    strDate = dayjs(strDate).format("YYYY/MM/DD");
  }

  const [jy, jm, jd] = strDate.split("/").map(Number);
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd);

  return dayjs.tz(new Date(gy, gm - 1, gd), "Asia/Tehran").toDate();
};

export default convertJalaaliToTehran;
