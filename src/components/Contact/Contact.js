import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-9 col-lg-6 border border-info rounded p-5 mx-auto">
          <form className="row g-2 rounded">
            <h1 className="text-info text-center mt-3 display-5">Contact Us</h1>
            <div>
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName="
                required
              />
            </div>
            <div>
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4="
                required
              />
            </div>

            <div class="mb-3">
              <label for="formControlTextarea1" class="form-label">Comment</label>
              <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
            </div>

            <div className="col-12">
              <Link to="/notfound" type="submit" className="btn btn-outline-info">
                Send
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;