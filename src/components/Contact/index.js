import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import { validateEmail } from "../../utils/helpers";

const ContactInfo = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }  
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="6" className="text-center">
          <h2>Contact Me</h2>
          <hr className="solid bg-dark" />
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:512-698-2297">
            <MDBIcon icon="phone-alt" /> 512-698-2297
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:marthagamez211@gmail.com">
            <MDBIcon icon="envelope" /> marthagamez211@gmail.com
          </a>
        </MDBCol>
        <MDBCol md="6" className="text-center">
          <form onSubmit={handleSubmit}>
            <label htmlFor="defaultFormContactNameEx" className="dark-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
              defaultValue={name}
              name="name"
              onBlur={handleChange}
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="dark-text">
              Your email
            </label>
            <input
              type="email"
              defaultValue={email}
              name="email"
              onBlur={handleChange}
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />

            <label htmlFor="defaultFormContactMessageEx" className="dark-text">
              Your message
            </label>
            <textarea
              type="text"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <br />
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <div className="text-center mt-4">
              <MDBBtn color="dark-green" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
