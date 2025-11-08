import { useTranslation } from 'react-i18next';
import info from '@assets/contact-info.json';
import { ClipboardClock, Instagram, Mail, MapPinHouse, Phone, Smartphone } from 'lucide-react';
import { cn } from '@lib/utils';

type ContactInfoProps = {
  timetable?: boolean;
  compact?: boolean;
  className?: string;
};

function ContactInfo({ timetable = true, className }: ContactInfoProps) {
  const { t } = useTranslation();
  return (
    <div>
      <div className={cn('contact-container', className)}>
        <div className="contact-element">
          <Phone className="contact-icon" />
          <span>
            {info.prefix} {info.phone}
          </span>
        </div>

        <div className="contact-element">
          <a href={`https://wa.me/${info.mobile}`} target="_blank" rel="noreferrer">
            <Smartphone className="contact-icon" />
            <span>
              {info.prefix} {info.mobile}
            </span>
          </a>
        </div>

        <div className="contact-element">
          <a href={`https://www.instagram.com/${info.instagram}/`} target="_blank" rel="noreferrer">
            <Instagram className="contact-icon" />
            <span>{info.instagram}</span>
          </a>
        </div>

        <div className="contact-element">
          <a href={`mailto:${info.email}`} target="_blank" rel="noreferrer">
            <Mail className="contact-icon" />
            <span>{info.email}</span>
          </a>
        </div>

        <div className="contact-element">
          <MapPinHouse className="contact-icon" />
          <span>{info.address}</span>
        </div>

        {timetable && (
          <div className="contact-element">
            <ClipboardClock className="contact-icon self-start" />
            <div>
              <p className="px-2">{t('about.info.working-hours')}:</p>
              <ul>
                <li>
                  {t('about.info.monday')} {t('about.info.working-hours-week')}
                </li>
                <li>
                  {t('about.info.tuesday')} {t('about.info.working-hours-week')}
                </li>
                <li>
                  {t('about.info.wednesday')} {t('about.info.working-hours-week')}
                </li>
                <li>
                  {t('about.info.thursday')} {t('about.info.working-hours-week')}
                </li>
                <li>
                  {t('about.info.friday')} {t('about.info.working-hours-weekend')}
                </li>
                <li>
                  {t('about.info.saturday')} {t('about.info.working-hours-weekend')}
                </li>
                <li>
                  {t('about.info.sunday')} {t('about.info.working-hours-week')}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactInfo;
