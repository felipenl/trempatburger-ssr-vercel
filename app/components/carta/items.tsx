import type { MenuItemType } from '@/types/menu';
import LazyImg from '@components/lazy/lazy-image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card';
import { useTranslation } from 'react-i18next';

type MenuItemProps = {
  item: MenuItemType;
};

function MenuItem({ item }: MenuItemProps) {
  const { t } = useTranslation();

  return (
    <div className="relative h-full">
      <Card key={item.key} className="menu-card h-full">
        <CardHeader className="menu-card-header">
          <CardTitle className="menu-card-title">{t(`${item.key}.name`)}</CardTitle>
        </CardHeader>
        <CardContent className="menu-card-body">
          <LazyImg
            src={`/images/menu/${item.image}`}
            alt={t(`${item.key}.name`)}
            className="menu-card-image"
            options={{ rootMargin: '100px' }}
          />
          <CardDescription className="menu-card-description">
            {t(`${item.key}.description`) || ''}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

export default MenuItem;
