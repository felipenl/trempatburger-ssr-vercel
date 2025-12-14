import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import { ThemeVariants, useTheme, type Theme } from '@/components/theme/theme-provider'
import { useTranslation } from 'react-i18next'
import { Moon, Sun, SunMoon } from 'lucide-react'
import { cn } from '@lib/utils'

const getIcon = (variant: Theme, className?: string) => {
  let Icon = null

  switch (variant) {
    case 'light':
      Icon = Sun
      break
    case 'dark':
      Icon = Moon
      break
    case 'system':
      Icon = SunMoon
      break
  }

  return <Icon className={cn('icon', className)} />
}

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const { t } = useTranslation()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild title={t('theme.toggle')}>
        <Button variant="outline" size="icon">
          {getIcon(theme)}
          <span className="sr-only">{t('theme.toggle')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {ThemeVariants.map((variant: Theme) => (
          <DropdownMenuItem key={variant} onClick={() => setTheme(variant)} className="menu-item">
            {getIcon(variant, 'h-auto w-6 lg:w-4')}
            {t(`theme.${variant}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
