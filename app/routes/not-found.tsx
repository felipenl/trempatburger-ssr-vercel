import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>404 - {t('not-found.title')}</h2>
      <p>{t('not-found.subtitle')}</p>
      <Link to="/">{t('not-found.go-home')}</Link>
    </div>
  );
}

export default NotFound;
