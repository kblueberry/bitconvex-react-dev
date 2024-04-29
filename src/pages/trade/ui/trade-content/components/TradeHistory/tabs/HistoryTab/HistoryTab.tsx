import { useResize } from "@/hooks/useResize";

import { HistoryTabDesktop } from "./HistoryTabDesktop";
import { HistoryTabMobile } from "./HistoryTabMobile";

export const HistoryTab = () => {
  const { isAdaptive } = useResize(1024);

  return isAdaptive ? <HistoryTabMobile /> : <HistoryTabDesktop />;
};
