'use server'

import { cookies } from 'next/headers'

export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies()

  return cookieStore.get(name)?.value
}

export async function setCookie(name: string, value: string) {
  const cookieStore = await cookies()

  cookieStore.set(name, value, {
    path: '/',
    httpOnly: false,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)
  })
}

export async function deleteCookie(name: string) {
  const cookieStore = await cookies()

  cookieStore.delete(name)
}

export async function getTranslatedData(data: { [key: string]: React.ReactNode }, locale: string) {
  if (Object.keys(data).includes(locale)) {
    return data[locale]
  } else {
    return data[process.env.NEXT_PUBLIC_DEFAULT_LOCALE as keyof typeof data]
  }
}
