import { useTranslation } from 'react-i18next';
import menu from '@assets/menu.json';
import { navigationMenuTriggerStyle } from '@components/ui/navigation-menu';
import { cn } from '@lib/utils';

function MenuSidebar() {
  const { t } = useTranslation();

  return (
    <div>
      <aside className="menu-sidebar">
        <div className="list">
          <h2 className="title">{t('menu.title')}</h2>
          {Object.values(menu).map(category => {
            if (!category.display) return null;
            return (
              <div key={`category-item-${category.id}`}>
                <div
                  className={cn(navigationMenuTriggerStyle(), 'item', {
                    active: window.location.hash === `#${category.id}`,
                  })}
                >
                  <a href={`#${category.id}`}>{t(category.key)}</a>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default MenuSidebar;
