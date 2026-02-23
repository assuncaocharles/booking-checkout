"use client";

import { CheckoutProvider } from "@/contexts/checkout-context";
import Checkout from "./checkout";

export default function Home() {
  return (
    <CheckoutProvider>
      <Checkout />
    </CheckoutProvider>
  );
}
