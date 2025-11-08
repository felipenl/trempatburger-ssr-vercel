import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import type { CategoryType } from '@/types/menu';
import { withFadeIn } from '@components/animations/with-fade-in';
import FadeInContainer from '@components/animations/fade-in-container';

const MenuItem = lazy(() => import('./items'));

function Category({ category }: { category: CategoryType }) {
  const { t } = useTranslation();
  return (
    <section id={`${category.id}`}>
      <h2 className="m-4 py-10 text-xl font-semibold">{t(category.key)}</h2>
      <FadeInContainer>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {category.items?.map((item, i) => {
            const FadeInItem = withFadeIn(MenuItem, { delay: i });
            return <FadeInItem item={item} key={item.key} />;
          })}
        </div>
      </FadeInContainer>
    </section>
  );
}

export default Category;
