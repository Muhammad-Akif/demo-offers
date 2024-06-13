import React from 'react';

const DetailsSection = ({ title, stayDate, description, benefits, note, terms, imageSrc }) => {
  return (
    <div className="card_banner" style={{ flexDirection: title === "Suite Offers" ? "row-reverse" : "" }}>
      <div className="text-section">
        <h1>{title}</h1>
        <p><strong>Stay Date:</strong> {stayDate}</p>
        <p>{description}</p>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        {note && <p>{note}</p>}
        <p><strong>T&C:</strong></p>
        <ul>
          {terms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
      <div className="image-section">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
}

export default DetailsSection;
