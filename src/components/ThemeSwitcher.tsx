'use client'

import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Icons } from './icons'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="text-slate-950 dark:text-white">
      <Switch
        defaultSelected
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        size="md"
        color="primary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <Icons.Sun className={className} />
          ) : (
            <Icons.Moon className={className} />
          )
        }
      />
    </div>
  )
}
