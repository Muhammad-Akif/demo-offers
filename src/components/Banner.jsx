import React from 'react'

const Banner = ({heading}) => (
    <section>
      <div className="banner">
        <div className="banner-content">
          <h1>{heading}</h1>
        </div>
      </div>
    </section>
  );

export default Banner