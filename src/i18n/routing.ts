import { defineRouting } from 'next-intl/routing'

const locales = ['en', 'fr', 'jp'] as const

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE as (typeof locales)[number]
})
