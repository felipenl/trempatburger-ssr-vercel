import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import useEventListener from '@hooks/useEventListener';
import { ArrowBigUp } from 'lucide-react';

function BackToTop() {
  const elementRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEventListener('scroll', () => {
    if (!elementRef.current) return;

    elementRef.current.classList.toggle('opacity-100!', window.scrollY > 500);
  });

  return (
    <div className="back-to-top" ref={elementRef}>
      <Button variant="destructive" className="button" onClick={handleScroll}>
        <div className="text sr-only">{t('nav.back-to-top')}!</div>
        <ArrowBigUp className="icon" />
      </Button>
    </div>
  );
}

export default BackToTop;
