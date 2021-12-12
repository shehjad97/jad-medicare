import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, img, title, cost, description } = props.service;
  return (
    <div className="col-lg-6">
      <div className="border border-info rounded p-2">
        <div className='py-3 px-1'>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="text-info fs-4">{title}</h2>
              <p className="m-0">{description}</p>
              <span className="fs-5 d-block pt-2">
                <span className="text-info">
                  <i className="fas fa-dollar-sign"></i>
                </span>{" "}
                {cost}
              </span>
              <Link
                to={`/services/${id}`}
                className="btn btn-outline-info mt-3 rounded-3"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;