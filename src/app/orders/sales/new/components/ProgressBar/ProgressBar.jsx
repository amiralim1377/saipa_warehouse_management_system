"use client";
import { motion } from "framer-motion";

export default function ProgressBar({ step, totalSteps }) {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-8">
      {/* برچسب مراحل */}
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        {[...Array(totalSteps)].map((_, index) => (
          <span
            key={index}
            className={`${
              step === index + 1
                ? "text-primary font-medium"
                : "text-muted-foreground"
            }`}
          ></span>
        ))}
      </div>

      {/* نوار پیشرفت */}
      <div className="relative h-2 bg-muted  overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
