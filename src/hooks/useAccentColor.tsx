"use client";

import { deleteCookie, setCookie } from "@/lib/server-utils";
import { createContext, useContext, useEffect, useState } from "react";

const AccentColorContext = createContext<{
  accentColor: string;
  changeAccentColor: (accentColor: string | undefined) => void;
}>({
  accentColor: "default",
  changeAccentColor: () => {},
});

export default function AccentColorProvider({
  children,
  initialAccentColor = "default",
}: {
  children: React.ReactNode;
  initialAccentColor?: string;
}) {
  const [accentColor, setAccentColor] = useState<string>(initialAccentColor);

  const changeAccentColor = (accentColor: string | undefined) => {
    if (accentColor) {
      document.documentElement.setAttribute("data-accent-color", accentColor);
      setCookie("accent-color", accentColor);
      setAccentColor(accentColor);
    } else {
      document.documentElement.removeAttribute("data-accent-color");
      deleteCookie("accent-color");
      setAccentColor("default");
    }
  };

  // Appliquer la couleur initiale au chargement
  useEffect(() => {
    if (initialAccentColor && initialAccentColor !== "default") {
      document.documentElement.setAttribute(
        "data-accent-color",
        initialAccentColor
      );
    }
  }, [initialAccentColor]);

  return (
    <AccentColorContext.Provider value={{ accentColor, changeAccentColor }}>
      {children}
    </AccentColorContext.Provider>
  );
}

export function useAccentColor() {
  const context = useContext(AccentColorContext);

  if (!context) {
    throw new Error("useAccentColor must be used within a AccentColorProvider");
  }

  return context;
}
