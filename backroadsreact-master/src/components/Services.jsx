import React from 'react'
import { services } from './Constants'

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="section-title">
                <h2>our <span>services</span></h2>
            </div>
            <div className="section-center services-center">

                {services.map((service) => {
                    return (
                        <article className="service" key={service.id}>
                            <span className="service-icon"><i className={service.icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Asperiores, officia.
                                </p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services