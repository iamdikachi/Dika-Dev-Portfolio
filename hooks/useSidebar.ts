"use client";

import { useState } from "react";

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggle = () => setIsCollapsed(!isCollapsed);
  const collapse = () => setIsCollapsed(true);
  const expand = () => setIsCollapsed(false);

  return {
    isCollapsed,
    toggle,
    collapse,
    expand,
  };
};
