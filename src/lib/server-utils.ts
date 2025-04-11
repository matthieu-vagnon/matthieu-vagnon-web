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
