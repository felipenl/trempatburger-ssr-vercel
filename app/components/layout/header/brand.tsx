import Trempat from '@assets/logos/trempat_doble.svg?react';
import Mano from '@assets/logos/mano.svg?react';
import useLayout from '@hooks/useLayout';
import { Link } from 'react-router';

function Brand() {
  const { isDesktop } = useLayout();
  return (
    <Link to="/">
      <div className="brand">
        {!isDesktop ? (
          <Mano className="logo" aria-label="Logo mano" />
        ) : (
          <Trempat className="logo" aria-label="Logo trempat" />
        )}
      </div>
    </Link>
  );
}

export default Brand;
