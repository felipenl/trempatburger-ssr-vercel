import { mapUrl } from '@assets/contact-info.json';

function Map() {
  return (
    <div>
      <iframe
        title="Trempat Burger Location"
        src={mapUrl}
        allowFullScreen={false}
        className="map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
