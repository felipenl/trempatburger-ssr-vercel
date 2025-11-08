import { useTranslation } from 'react-i18next';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@lib/utils';

type LoadingProps = {
  label?: string;
  className?: string;
};

function Loading({ label = 'common.loading', className }: LoadingProps) {
  const { t } = useTranslation();
  return (
    <div className={cn('justify-center" m-4 flex items-center', className)}>
      <LoaderCircle className="m-1 animate-spin text-4xl" />
      {t(label)}...
    </div>
  );
}

export default Loading;
