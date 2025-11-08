import Nav from './nav';
import Brand from './brand';
import MobileMenu from './mobile-menu';
import OrderButton from '@components/order-button';

function Header() {
  return (
    <header className="header">
      <div className="flex items-center justify-between">
        <Brand />
        <Nav />
        <OrderButton className="mr-2! ml-auto!" />
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
