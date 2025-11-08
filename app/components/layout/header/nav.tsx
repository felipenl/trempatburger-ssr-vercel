import { paths } from '@/routes';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@components/ui/navigation-menu';
import useLayout from '@hooks/useLayout';
import { Contact, Hamburger, Store } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export const IconMap = {
  home: Store,
  menu: Hamburger,
  about: Contact,
};

export default function Nav() {
  const { isMobile } = useLayout();

  const { t } = useTranslation();

  if (isMobile) return null;

  return (
    <NavigationMenu className="main-nav">
      <NavigationMenuList>
        {paths.map(({ id, path, label, ...props }) => {
          const Icon = IconMap[id];
          return (
            <NavigationMenuItem key={`menu-${label}`}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to={path} {...props} className="nav-link">
                  <Icon className="menu-icon" />
                  {t(label)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
