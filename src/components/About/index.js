import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import coverImage from "../../assets/cover/cover-image.jpg";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src={coverImage}
            class="float-left pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Martha Gamez. I recently graduated a Full Stack
            Web Developer program at the University of Austin and received
            certificate of completion. Currently I live in Auatin, Tx. I am
            actively looking for job opportunities as a Junior Web Developer in
            Austin. 
          </p>
          <p style={{ fontSize: "27px" }}>
            I am proficient with computers and have good understanding of
            Microsoft OS and Microsoft Office. I also have experience using
            Linux OS. I am committed to high standards of user experience,
            usability, and speed. I lend detailed knowledge of SEO to increase
            visibility. I am detail focused and an ambitious problem solver with
            a passion for learning new skills.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;