import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTranslatedData(data: { [key: string]: React.ReactNode }, locale: string) {
  if (Object.keys(data).includes(locale)) {
    return data[locale]
  } else {
    return data[process.env.NEXT_PUBLIC_DEFAULT_LOCALE as keyof typeof data]
  }
}
