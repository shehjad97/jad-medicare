import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeServices from "../HomeServices/HomeServices";
import homeImg from "../../images/Home.jpg"

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <section className="row justify-content-between my-5">
        <div className="col-md-6 row align-items-center justify-content-between text-center">
          <div>
            <h1 className="text-info display-4 mt-3 mb-0">Jad Medicare</h1>
            <p className="text-dark fs-5 m-0">
              Say Hello To A Better Life
            </p>
            <Link className="btn btn-outline-info mt-3" to="/services">Find Help</Link>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={homeImg} alt="about img" />
        </div>
      </section>

      {/* About Us */}
      <section className="row justify-content-between my-5">
        <h1 className="text-info text-center pb-3">About Us</h1>
        <div className="row align-items-center justify-content-between text-center">
          <div>
            <p className="text-dark">
            At Jad Medicare, providing our patients with a trusted and compassionate environment for healthcare is central to our mission. We draw strength from our purpose, which is above all to help and to heal. Our physicians, nurses and other caregivers & supporting staff are passionate about providing the right care at the right time, bringing hope and healing to our patients and their families. Patients trust us with their most valuable possession – their lives - and all of our caregivers recognize the immense responsibility that comes with that trust.
            </p>
            <Link className="btn btn-outline-info mt-2 mb-3" to="/about">Learn More</Link>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-info text-center pb-3">Services We Offer</h1>
        <div className="row mb-5 g-4">
          {services.map((service) => (
            <HomeServices key={service.id} service={service}></HomeServices>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;