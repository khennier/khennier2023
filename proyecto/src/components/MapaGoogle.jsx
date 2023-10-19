import React from 'react';
import Iframe from 'react-iframe';

function MapaGoogle() {
  return (
    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.49571414499!2d-58.4989564930994!3d-34.573337900747106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sPalermo%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1697472188011!5m2!1ses-419!2sar"
      width="600"
      height="450"
      allowfullscreen=""
      referrerpolicy="no-referrer-when-downgrade"
    />
  );
}

export default MapaGoogle;
