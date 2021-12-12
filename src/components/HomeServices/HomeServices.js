import React from "react";
import { Link } from "react-router-dom";

const HomeServices = (props) => {
  const { id, img, title, time, description } = props.service;
  return (
    <div className="col-lg-6">
      <div className="border border-info rounded">
        <div className='py-4 px-1'>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="col-md-6">
              <h2 className="text-info fs-4">{title}</h2>
              <p className="m-0">{description}</p>
              <span className="fs-5 pt-2 d-block">
                <i className="far fa-clock text-info"></i> {time}
              </span>
              <Link to={`/services/${id}`} className="btn btn-outline-info mt-3 rounded">
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;