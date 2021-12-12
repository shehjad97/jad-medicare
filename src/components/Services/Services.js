import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="container">
            <div className='mt-4'></div>

            <section>
                <div className='text-center py-3 mb-3'>
                    <h1 className="text-info m-0">Services We Offer</h1>
                    <p className='text-secondary m-0'>providing quality healthcare and valuable experience to all domestic and international patients</p>
                </div>
                <div className="row mb-5 g-4">
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;