import React from 'react';

type Props = {
  title: string,
  text: string
}

function PrivacySection({ title, text }: Props) {
  return (
    <div className="privacy-section">
      <h2>{title}</h2>
      {
        Array.isArray(text) ? (
          text.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        ) : <p>{text}</p>
      }
    </div>
  );
}

export default PrivacySection;
