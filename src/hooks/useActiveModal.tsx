"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const ActiveModalContext = createContext<{
  activeModal: string | undefined;
  setActiveModal: (activeModal: string | undefined) => void;
}>({
  activeModal: undefined,
  setActiveModal: () => {},
});

export default function ActiveModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeModal, setActiveModal] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams();
  const modalParam = searchParams.get("action");

  useEffect(() => {
    if (modalParam) {
      setActiveModal(modalParam);
    }
  }, [setActiveModal, modalParam]);

  return (
    <ActiveModalContext.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </ActiveModalContext.Provider>
  );
}

export function useActiveModal() {
  const context = useContext(ActiveModalContext);

  if (!context) {
    throw new Error(
      "useActiveModal must be used within a ActiveModalProvider."
    );
  }

  return context;
}
