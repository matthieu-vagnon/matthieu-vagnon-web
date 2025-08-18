"use client";

import { createContext, useContext, useState } from "react";

const DockStatusContext = createContext<{
  isDockOpen: boolean;
  setIsDockOpen: (isDockOpen: boolean) => void;
}>({
  isDockOpen: true,
  setIsDockOpen: () => {},
});

export default function DockStatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDockOpen, setIsDockOpen] = useState(true);

  return (
    <DockStatusContext.Provider value={{ isDockOpen, setIsDockOpen }}>
      {children}
    </DockStatusContext.Provider>
  );
}

export function useDockStatus() {
  const context = useContext(DockStatusContext);

  if (!context) {
    throw new Error("useDockStatus must be used within a DockStatusProvider.");
  }

  return context;
}
