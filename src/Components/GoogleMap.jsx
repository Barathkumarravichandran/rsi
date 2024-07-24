import React from 'react';

const GoogleMap = () => {
  return (
    <div className="rs-g-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1992570.282310929!2d77.72562965007285!3d12.730453349899884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae775e557e734d%3A0x4b7b2ff1f0c65058!2sClub%20House%20Road%2C%20Maruthi%20Greenfields%20township%2C%20Hosur%2C%20Tamil%20Nadu%20635109!5e0!3m2!1sen!2sin!4v1721149031806!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;