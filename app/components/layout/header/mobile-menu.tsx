import useLayout from '@hooks/useLayout'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { paths } from '@/routes'
import { Drawer, DrawerContent, DrawerClose, DrawerTrigger } from '@components/ui/drawer'
import OrderButton from '@components/order-button'
import ModeToggle from '@/components/theme/mode-toggle'
import LanguageSwitcher from '@/components/locale/language-switcher'
import { useState } from 'react'
import { Link } from 'react-router'
import { IconMap } from './nav'
import { DialogTitle } from '@radix-ui/react-dialog'

function MobileMenu() {
  const { isMobile } = useLayout()
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  if (!isMobile)
    return (
      <>
        <LanguageSwitcher />
        <ModeToggle />
      </>
    )

  return (
    <div className="mobile-menu">
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Button asChild variant="outline" size="icon" className="trigger p-2">
            <Menu />
          </Button>
          <span className="sr-only">{t('theme.toggle')}</span>
        </DrawerTrigger>
        <DrawerContent>
          <DialogTitle className="sr-only">
            <span className="sr-only">{t('theme.menu')}</span>
          </DialogTitle>
          <div className="mobile-drawer">
            <div className="flex justify-end gap-2">
              <LanguageSwitcher />
              <ModeToggle />
              <DrawerClose>
                <Button asChild size="icon" variant="outline" title={t('nav.close-menu')}>
                  <X className="menu-icon" />
                </Button>
              </DrawerClose>
            </div>
            <div className="my-8 flex flex-col justify-center">
              <OrderButton className="my-4 w-full" />

              {paths.map(({ id, path, label, ...props }) => {
                const Icon = IconMap[id]
                return (
                  <Link to={path} key={`menu-${label}`} onClick={() => setOpen(false)} {...props}>
                    <div className="flex items-center border-t-2 p-6 py-4 text-lg">
                      <Icon className="menu-icon mr-2 h-8! w-8!" />
                      {t(label)}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default MobileMenu
