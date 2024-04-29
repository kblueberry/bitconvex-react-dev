import { useResize } from "@/hooks/useResize";

import { OrdersTabDesktop } from "./OrdersTabDesktop";
import { OrdersTabMobile } from "./OrdersTabMobile";

export const OrdersTab = () => {
  const { isAdaptive } = useResize(1024);

  return isAdaptive ? <OrdersTabMobile /> : <OrdersTabDesktop />;
};
