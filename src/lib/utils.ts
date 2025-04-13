import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function returnIntPath(lang: string, pathname: string) {
  const segments = pathname.split('/')
  const path = segments.slice(2).join('/')

  return `/${lang}/${path}`
}
