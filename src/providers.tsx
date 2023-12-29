'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers(props: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {props.children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
