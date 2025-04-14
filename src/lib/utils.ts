import { clsx, type ClassValue } from 'clsx'
import { Locale } from 'next-intl'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTranslatedData(
  data: Record<string, string | React.ReactNode | undefined> | undefined,
  locale: Locale
): string | React.ReactNode | undefined {
  if (data) {
    if (Object.keys(data).includes(locale)) {
      return data[locale]
    } else {
      return data[process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Locale]
    }
  } else {
    return undefined
  }
}

export function getFlattenedNode(node: React.ReactNode): string {
  if (!node) return ''

  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode }
    const children = props.children

    if (typeof children === 'string') {
      return children
    } else if (typeof children === 'number') {
      return children.toString()
    } else if (Array.isArray(children)) {
      return children.map((child) => (typeof child === 'string' ? child : getFlattenedNode(child))).join('')
    }
  } else if (typeof node === 'string') {
    return node
  } else if (typeof node === 'number') {
    return node.toString()
  }

  return ''
}
