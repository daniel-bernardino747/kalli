'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

const logoUrls = {
  dark: '/logo-light.svg',
  light: '/logo-dark.svg',
}

type Theme = 'dark' | 'light'

export function Logo() {
  const { theme: currentTheme = 'light' } = useTheme()

  const logoUrl = logoUrls[currentTheme as Theme]

  return <Image src={logoUrl} width={30} height={30} alt="Logo da Kalli" />
}
