import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleService = () => {
  const { serviceId } = useParams();
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setSingleService(data));
  }, []);
  const singleId = parseInt(serviceId);
  const result = singleService.find(({ id }) => id === singleId);
  return (
    <div className="container">
      <div className="row justify-content-between rounded-3 py-3 m-4">
        <div className="col-md-6 row justify-content-center align-items-center order-last order-md-first">
          <div>
            <h1 className="text-info">{result?.title}</h1>
            <p className="text-secondary my-2 fs-6">{result?.details}</p>
            <div>
              <span className="fs-4">
                <span className="text-info">
                  <i className="fas fa-dollar-sign"></i>
                </span>{" "}
                {result?.cost}
              </span>
              <span className="fs-4 ms-5">
                <span className="text-info">
                  <i className="far fa-clock text-info"></i>
                </span>{" "}
                {result?.time}
              </span>
            </div>
            <Link
              to="/services"
              className="btn-outline-info btn mt-3 rounded-3"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
        <div className="col-md-6 order-first order-md-last">
          <img className="img-fluid" src={result?.img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SingleService;