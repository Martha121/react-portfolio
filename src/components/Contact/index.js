import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="6" className="text-center">
          <h2>Contact Me</h2>
          <hr class="solid bg-dark" />
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
            <MDBIcon icon="envelope" /> marthagamez211s@gmail.com
          </a>
        </MDBCol>
        <MDBCol md="6" className="text-center">
          <form>
            
            <div class="form-outline mb-4">
              <input type="text" id="form4Example1" class="form-control" />
              <label class="form-label" for="form4Example1">Name</label>
            </div>

            
            <div class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" />
              <label class="form-label" for="form4Example2">Email address</label>
            </div>

            
            <div class="form-outline mb-4">
              <textarea class="form-control" id="form4Example3" rows="4"></textarea>
              <label class="form-label" for="form4Example3">Message</label>
            </div>
            
            <button type="submit" class="btn btn-elegant btn-block mb-4">Send</button>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;
