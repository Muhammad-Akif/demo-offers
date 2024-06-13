import React from 'react'

const Offers = ({title, desc}) => {
    return (
        <section className="offers">
            <div>
                <span className="offers-heading">{title}</span>
                <p className="offers-content">{desc}</p>
            </div>
        </section>
    )
}

export default Offers