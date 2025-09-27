"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

function ShamsiClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        dayjs().calendar("jalali").locale("fa").format("YYYY/MM/DD HH:mm:ss")
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}

export default ShamsiClock;
