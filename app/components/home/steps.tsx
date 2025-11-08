import { useTranslation } from 'react-i18next';
import FadeIn from '@components/animations/fade-in';
import { cn } from '@lib/utils';
import { Hamburger, ChefHat, Drumstick, CakeSlice, ShoppingBag, Sofa } from 'lucide-react';

const steps = [
  { id: 'choose-your-burger', icon: Hamburger },
  { id: 'customize-it', icon: ChefHat },
  { id: 'add-sides', icon: Drumstick },
  { id: 'add-desserts', icon: CakeSlice },
  { id: 'checkout', icon: ShoppingBag },
  { id: 'enjoy', icon: Sofa },
];

function Steps() {
  const { t } = useTranslation();
  return (
    <div className="mt-16 lg:mt-20">
      <div className="steps-container">
        <div className="step-line" />
        {steps.map((step, i) => (
          <FadeIn key={`step-${step.id}`}>
            <div className={cn('step', i % 2 === 0 ? 'mr-10 ml-auto' : 'mr-auto ml-10')}>
              <div className="circle absolute h-20 w-20">
                <step.icon className="icon" />
              </div>
              <div className="content">
                <div className="title">
                  <h3>{t(`order.steps.${step.id}.title`)}</h3>
                </div>
                <div className="description">{t(`order.steps.${step.id}.description`)}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default Steps;
