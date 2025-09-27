"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

function ShamsiClock() {
  const [time, setTime] = useState(
    dayjs().calendar("jalali").locale("fa").format("YYYY/MM/DD HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        dayjs().calendar("jalali").locale("fa").format("YYYY/MM/DD HH:mm:ss")
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}

export default ShamsiClock;
