import Mano from '@assets/logos/spinner.svg?react';

export default function TrempatSpinner() {
  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Mano
        style={{
          width: 'min(40vmin, 100px)',
          overflow: 'visible',
          color: '#d90404',
        }}
        aria-label="Loading..."
      />
    </div>
  );
}
