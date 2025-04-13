import { clsx, type ClassValue } from 'clsx'
import { Locale } from 'next-intl'
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
