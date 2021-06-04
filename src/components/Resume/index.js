import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Resume from "../../assets/images/Martha-resume.PNG";


const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <img id="Resume" src={Resume} alt="Resume" width="100%" height="750px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
