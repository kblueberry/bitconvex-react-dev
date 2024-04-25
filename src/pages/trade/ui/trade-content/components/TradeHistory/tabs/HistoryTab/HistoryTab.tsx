import { HistoryTabDesktop } from "./HistoryTabDesktop";
import { HistoryTabMobile } from "./HistoryTabMobile";

export const HistoryTab = () => {
  return window.innerWidth < 600 ? <HistoryTabMobile /> : <HistoryTabDesktop />;
};
