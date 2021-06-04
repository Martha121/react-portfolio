import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import coverImage from "../../assets/images/martha_inkedin.jpg";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr className="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src={coverImage}
            className="float-left pr-4 pb-3 img-fluid"
            alt="Martha Gamez"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Martha Gamez.
             I am a student of a Full Stack Web Developer program at the University of Austin. 
          </p>
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;