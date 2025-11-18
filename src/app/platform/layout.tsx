import React from "react";
import PlatformChrome from "./PlatformChrome";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PlatformChrome>{children}</PlatformChrome>;
}