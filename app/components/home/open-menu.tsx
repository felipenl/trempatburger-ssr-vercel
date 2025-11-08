import { useTranslation } from 'react-i18next';
import LazyImg from '@components/lazy/lazy-image';
import FadeIn from '@components/animations/fade-in';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

function OpenMenu() {
  const { t } = useTranslation();

  return (
    <FadeIn>
      <div className="menu-page-image">
        <h1 className="mx-auto mt-10 text-center text-3xl! lg:mt-20">{t('menu.waiting-for')}</h1>
        <div className="link">
          <Link to="/carta">
            {t('menu.check-menu')}
            <ArrowRight
              strokeWidth={4}
              className="animate-in h-25 w-25 transition-transform hover:scale-110"
            />
          </Link>
        </div>
        <div className="image-container -mb-25">
          <LazyImg src="images/mano-burgers.png" alt="Hand holding burgers" />
        </div>
      </div>
    </FadeIn>
  );
}

export default OpenMenu;
