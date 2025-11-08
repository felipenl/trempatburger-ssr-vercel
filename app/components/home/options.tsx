import Testimonial from '@components/testimonial';
import { Leaf, MilkOff, Truck, WheatOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Options() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        <Testimonial avatar={<Truck className="h-12 w-12" />} col quotes={false}>
          {t('menu.options.vegan-options')}
        </Testimonial>
        <Testimonial avatar={<Leaf className="h-12 w-12" />} col quotes={false}>
          {t('menu.options.vegan-options')}
        </Testimonial>
        <Testimonial avatar={<WheatOff className="h-12 w-12" />} col quotes={false}>
          {t('menu.options.gluten-free-options')}
        </Testimonial>
        <Testimonial avatar={<MilkOff className="h-12 w-12" />} col quotes={false}>
          {t('menu.options.lactose-free-options')}
        </Testimonial>
      </div>
    </div>
  );
}

export default Options;
