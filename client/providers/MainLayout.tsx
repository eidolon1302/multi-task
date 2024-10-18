"use client";
import React, { Children } from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return <div className="main-layout flex-1 bg-[#EDEDED] border-2 border-white rounded-[1.5rem] overflow-visible">{children}</div>
}

export default MainLayout;