import { useEffect, useState } from "react";

function brtTime(): string {
  try {
    const now = new Date();
    const brtString = now.toLocaleTimeString("en-US", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return brtString + " BRT";
  } catch {
    return "--:-- BRT";
  }
}

export function useLiveClock(): string {
  const [time, setTime] = useState<string>(brtTime);
  useEffect(() => {
    const id = setInterval(() => setTime(brtTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function useContactClock(): string {
  const [time, setTime] = useState<string>(() => {
    try {
      const now = new Date();
      return (
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " (UTC-3)"
      );
    } catch {
      return "--:-- (UTC-3)";
    }
  });
  useEffect(() => {
    const id = setInterval(() => {
      try {
        const now = new Date();
        setTime(
          now.toLocaleTimeString("en-US", {
            timeZone: "America/Sao_Paulo",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }) + " (UTC-3)"
        );
      } catch {
        /* keep current */
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}