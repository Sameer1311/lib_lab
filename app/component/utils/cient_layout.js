"use client";

import LoadingScreen from "./template";

export default function ClientLayout({ children }) {
  return <LoadingScreen>{children}</LoadingScreen>;
}
