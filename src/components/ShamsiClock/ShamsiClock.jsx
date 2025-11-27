"use client";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

function ShamsiClock() {
  const [date, setDate] = useState("");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = dayjs().calendar("jalali").locale("fa");
      setDate(now.format("YYYY/MM/DD"));
      setClock(now.format("HH:mm:ss"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center flex-col gap-y-2 w-full">
      <div>{date}</div>
      <div>{clock}</div>
    </div>
  );
}

export default ShamsiClock;
