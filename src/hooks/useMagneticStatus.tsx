"use client";

import { deleteCookie, setCookie } from "@/lib/server-utils";
import { createContext, useContext, useEffect, useState } from "react";

const MagneticStatusContext = createContext<{
  isMagnetic: boolean | undefined;
  changeIsMagnetic: (isMagnetic: boolean | undefined) => void;
}>({
  isMagnetic: false,
  changeIsMagnetic: () => {},
});

export default function MagneticStatusProvider({
  children,
  initialMagneticStatus,
}: {
  children: React.ReactNode;
  initialMagneticStatus?: boolean;
}) {
  const [isMagnetic, setIsMagnetic] = useState(initialMagneticStatus);

  const getDefaultMagneticStatus = () => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return false;
    } else {
      return true;
    }
  };

  const changeIsMagnetic = (isMagnetic: boolean | undefined) => {
    if (isMagnetic === undefined) {
      setIsMagnetic(getDefaultMagneticStatus());
      deleteCookie("magnetic");
    } else {
      setIsMagnetic(isMagnetic);
      setCookie("magnetic", isMagnetic.toString());
    }
  };

  useEffect(() => {
    if (initialMagneticStatus !== undefined) {
      setIsMagnetic(initialMagneticStatus);
    } else {
      setIsMagnetic(getDefaultMagneticStatus());
    }
  }, [initialMagneticStatus]);

  return (
    <MagneticStatusContext.Provider value={{ isMagnetic, changeIsMagnetic }}>
      {children}
    </MagneticStatusContext.Provider>
  );
}

export function useMagneticStatus() {
  const context = useContext(MagneticStatusContext);

  if (!context) {
    throw new Error(
      "useMagneticStatus must be used within a MagneticStatusProvider."
    );
  }

  return context;
}
