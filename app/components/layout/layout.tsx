import Header from './header/header';
import Footer from './footer';
import { Suspense } from 'react';
import TrempatSpinner from '@components/trempat-spinner';
import { useInstantScrollOnNavigate } from '@hooks/useScrollOnNavigation';
import { Outlet } from 'react-router';

export default function Layout() {
  useInstantScrollOnNavigate();

  return (
    <div className="layout">
      <Header />
      <main className="layout-content">
        <Suspense fallback={<TrempatSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
