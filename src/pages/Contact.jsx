import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div>
      <div className="container">
        <h3 className="text-center text-uppercase pt-4 lh-2">Contact us</h3>
        <div className="mx-auto contact-form-container shadow-sm rounded p-4 fs-5 text-muted">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Contact number
              </label>
              <input type="text" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" required />
              <div id="emailHelp" className="form-text fs-6">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-2" htmlFor="time">When can we reach you?</label>
              <select className="form-select" id="time" aria-label="Best time to contact">
              <option value="M">Morning</option>
              <option value="A">Afternoon</option>
              <option value="E">Evening</option>
            </select>
            </div>
            <div className="mb-3">
            <label className="mb-3" htmlFor="query">What would you like to ask us?</label>
              <textarea className="form-control" name="message" id="query" required></textarea>
            </div>
            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
