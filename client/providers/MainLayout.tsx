"use client";
import React, { Children } from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return <div>{children}
  </div>
}

export default MainLayout;