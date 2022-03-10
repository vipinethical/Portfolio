import React, { useState } from "react";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const onChangeInputs = (event, type) => {
    let value = event.target.value;

    switch (type) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "subject":
        setSubject(value);
        break;

      case "message":
        setMessage(value);
        break;

      default:
        break;
    }
  };

  const submitForm = (event) => {
    if (name === "" || name === undefined || name === null) {
      return true;
    }
    if (email === "" || email === undefined || email === null) {
      return true;
    }
    if (subject === "" || subject === undefined || subject === null) {
      return true;
    }
    if (message === "" || message === undefined || message === null) {
      return true;
    }

    event.preventDefault();
    let formValues = {};
    formValues.name = name;
    formValues.email = email;
    formValues.subject = subject;
    formValues.message = message;
    console.log(formValues);

    setLoading(true);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="mi-sectiontitle">
            <h2>Contact Me</h2>
            <span>Contact Me</span>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form className="mi-form mi-contact-form">
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={name}
                      onChange={(event) => onChangeInputs(event, "name")}
                      required
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      Enter your email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-form-email"
                      value={email}
                      onChange={(event) => onChangeInputs(event, "email")}
                      required
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">
                      Enter your subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={subject}
                      onChange={(event) => onChangeInputs(event, "subject")}
                      required
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">
                      Enter your Message*
                    </label>
                    <textarea
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={message}
                      onChange={(event) => onChangeInputs(event, "message")}
                      required
                    />
                  </div>
                  <div className="mi-form-field">
                    <button
                      className="mi-button"
                      type="submit"
                      onClick={submitForm}
                      disabled={loading === false ? false : true}
                    >
                      Send Mail
                      {loading === false ? null : (
                        <span
                          style={{ marginLeft: "5px" }}
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* ///////////////////////////////////// */}
            <div className="col-lg-6">
              <div className="mi-contact-info">
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Phone</h6>
                    <p>
                      <a href="tel:+918826-762-838">+917982-476-952</a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Email</h6>
                    <p>
                      <a href="mailto:sharmas2197@gmail.com">
                        Kvipin279@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Address</h6>
                    <p>Gurugram, Haryana. 122001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////// */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
