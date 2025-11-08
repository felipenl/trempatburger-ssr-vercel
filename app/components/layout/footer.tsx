import Trempat from '@assets/logos/trempat_doble.svg?react';
import Mano from '@assets/logos/mano.svg?react';
import ContactInfo from '@components/about/contact-info';
import BackToTop from '@components/back-to-top';

function Footer() {
  return (
    <>
      <BackToTop />
      <footer className="footer">
        <div className="mx-auto flex w-full max-w-xl items-center justify-center">
          <div className="w-1/3">
            <div className="font-riffic flex flex-col items-center justify-center gap-2 text-sm font-semibold">
              <Mano className="mx-auto mb-2 h-10 lg:h-15" />
              <Trempat className="hidden max-w-4/5 lg:block" />
              <span className="whitespace-nowrap">© {new Date().getFullYear()}</span>
            </div>
          </div>
          <ContactInfo timetable={false} className="compact text-xs lg:text-sm" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
