import { useEffect, useState } from "react";
import { HOURS } from "../data/site";

/** Live open/closed status based on Asia/Jakarta (WIB) time. */
export function useOpenStatus() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const h = hour === 24 ? 0 : hour;
  const open = h >= HOURS.open && h < HOURS.close;

  const closesIn =
    open && h === HOURS.close - 1 ? `Tutup pukul ${HOURS.close}.00 WIB` : null;

  return { open, hour: h, minute, closesIn };
}
