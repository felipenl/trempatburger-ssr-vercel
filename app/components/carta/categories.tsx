import type { CategoryType } from '@/types/menu';
import Category from './category';
import menu from '@assets/menu.json';

function MenuCategories() {
  return (
    <div>
      <main className="menu-categories">
        {(Object.values(menu) as CategoryType[]).map((category: CategoryType) => {
          if (!category.display || !category.items?.length) return null;
          return <Category key={category.key} category={category} />;
        })}
      </main>
    </div>
  );
}

export default MenuCategories;
