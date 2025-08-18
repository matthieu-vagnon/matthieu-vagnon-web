import { clsx, type ClassValue } from "clsx";
import { Locale } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Disabling eslint error for this specific function as it is widely used for different types now and in the future
/* eslint-disable  @typescript-eslint/no-explicit-any */
export function getTranslatedData(
  data: Record<string, any> | undefined,
  locale: Locale
): any {
  if (data) {
    if (data[locale]) {
      return data[locale];
    } else if (data[process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Locale]) {
      return data[process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Locale];
    } else {
      return Object.values(data).find(
        (value) => value !== undefined && value !== null
      );
    }
  } else {
    return undefined;
  }
}

export function getFlattenedNode(node: React.ReactNode): string {
  if (!node) return "";

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    const children = props.children;

    if (typeof children === "string") {
      return children;
    } else if (typeof children === "number") {
      return children.toString();
    } else if (Array.isArray(children)) {
      return children
        .map((child) =>
          typeof child === "string" ? child : getFlattenedNode(child)
        )
        .join("");
    }
  } else if (typeof node === "string") {
    return node;
  } else if (typeof node === "number") {
    return node.toString();
  }

  return "";
}
