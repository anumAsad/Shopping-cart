'use client'
import { useEffect, useState, useCallback } from "react";

type FlashSaleCountdownProps = {
  endTime: string;
};

const FlashSaleCountdown: React.FC<FlashSaleCountdownProps> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  // Memoize calculateTimeLeft to prevent re-definition on every render
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(endTime).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }, [endTime]); // Add endTime as a dependency to recalculate when it changes

  useEffect(() => {
    // Initialize timer logic on the client
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]); // Add calculateTimeLeft as a dependency

  if (!timeLeft) {
    return <div className="text-red-500 text-xl">Flash Sale Ended!</div>;
  }

  return (
    <div className="flex space-x-2 text-center items-center text-black p-4 rounded-md">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

type TimeUnitProps = {
  value: number;
  label: string;
};

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label }) => (
  <div className="flex flex-col items-center px-2">
    <span className="text-3xl font-bold">{value}</span>
    <span className="text-sm uppercase">{label}</span>
  </div>
);

export default FlashSaleCountdown;
