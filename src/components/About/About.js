import React from "react";
import aboutImg1 from "../../images/About1.jpg";
import aboutImg2 from "../../images/About2.jpg";

const About = () => {
    return (
        <div className="container">
            <section className="row justify-content-between my-5">
                <div className="col-md-6 row align-items-center justify-content-between">
                    <div>
                        <h1 className="text-info mt-4 mb-3">About Us</h1>
                        <small className="text-secondary">
                        At Jad Medicare, providing our patients with a trusted and compassionate environment for healthcare is central to our mission. We draw strength from our purpose, which is above all to help and to heal. Our physicians, nurses and other caregivers & supporting staff are passionate about providing the right care at the right time, bringing hope and healing to our patients and their families. Patients trust us with their most valuable possession – their lives - and all of our caregivers recognize the immense responsibility that comes with that trust.
                        </small>
                    </div>
                </div>
                <div className="col-md-6 order-first order-md-last">
                    <img className="img-fluid" src={aboutImg1} alt="" />
                </div>
            </section>

            <section className="row justify-content-between my-5">
                <div className="col-md-6">
                    <img className="img-fluid" src={aboutImg2} alt="about img" />
                </div>
                <div className="col-md-6 row align-items-center justify-content-between">
                    <div>
                        <h1 className="text-info my-3">Why Choose Us?</h1>
                        <small className="text-secondary">
                        Our aim is to give every patient the prospect of a better quality of life. To do so, we maintain a high standard of quality and are able to be innovative and forward thinking with our infrastructure, clinical delivery and staff development. Additionally, our collaboration with experienced specialists, expert healthcare professionals, clinical partners and patient groups ensures we provide the best-possible experience and care for patients and their families when visiting our hospitals.
                        </small>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;