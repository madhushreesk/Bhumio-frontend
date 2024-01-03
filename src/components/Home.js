import { Button } from "@mui/material";
import React from "react";
import wellCare from "../assets/wellCareLogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={wellCare} width={350} alt="wellCareLogo" />
      </div>
      <div className="buttonContainer">
        <Link to="/AddPatient">
          <Button
            style={{
              backgroundColor: "#ca93e4",
              margin: "15px",
              paddingLeft: "20px",
            }}
            variant="contained"
          >
            Add Patient
          </Button>
        </Link>

        <Link to="/SearchPatient">
          <Button
            style={{
              backgroundColor: "#ca93e4",
              margin: "15px",
              paddingLeft: "20px",
            }}
            variant="contained"
          >
            Search Patient
          </Button>
        </Link>

        <Link to="/EditPatient">
          <Button
            style={{
              backgroundColor: "#ca93e4",
              margin: "15px",
              paddingLeft: "20px",
            }}
            variant="contained"
          >
            Edit Patient
          </Button>
        </Link>

        <Link to="/selectFile">
          <Button
            style={{
              backgroundColor: "#ca93e4",
              margin: "15px",
              paddingLeft: "20px",
            }}
            variant="contained"
          >
            Select file
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
