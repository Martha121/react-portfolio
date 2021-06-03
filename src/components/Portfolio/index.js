import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="../images/karoleal1.png"
            alt="Karoleal photography"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Karoleal</MDBCardTitle>
            <MDBCardText>Photography website</MDBCardText>
            <MDBBtn href="https://www.karoleal.com"
             color="primary" 
             size="md">
            <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="../images/mostachos1.png"
            alt="Mostachos"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Mostachos</MDBCardTitle>
            <MDBCardText>
              Website for a pizza place, user are able to see the menu.
            </MDBCardText>
            <MDBBtn
              href="https://www.mostachospizza.com"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="../images/confeastador.PNG"
            alt="Confeastador"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">ConFEASTador</MDBCardTitle>
            <MDBCardText>
              Mern project to create reservations on restaurants
            </MDBCardText>
            <MDBBtn
              href="https://confeastador.herokuapp.com"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="../images/labmanager.png"
            alt="Lab Manager"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Lab Manager</MDBCardTitle>
            <MDBCardText>
              This app alows a lab to keep track of tests and results.
            </MDBCardText>
            <MDBBtn
              href="https://hidden-sea-70156.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="../images/chooseandchill.png"
            alt="ChooseandChill"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Choose-and-Chill</MDBCardTitle>
            <MDBCardText>
              This App helps you create a date night with information about
              recipes and movies
            </MDBCardText>
            <MDBBtn
              href="https://martha121.github.io/choose-and-chill/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="../images/run-buddy1.png"
            alt="Run Budy"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Run Buddy</MDBCardTitle>
            <MDBCardText>A page for a program called Run Buddy</MDBCardText>
            <MDBBtn
              href="https://martha121.github.io/run-buddy/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
