import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";
import wellCareLogo from "../assets/wellCareLogo.png";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import EditIcon from "@mui/icons-material/Edit";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Link } from "react-router-dom";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  const theme = createTheme({
    palette: {
      purple: createColor("#d0a0e7"),
    },
  });

  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "black", borderColor: "black" }} // Customize the color here
        onClick={() => setOpen(true)}
      >
        Open drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            padding: "40px",
          }}
        >
          <img width={200} src={wellCareLogo} alt="wellCareLogo" />
        </div>

        <ThemeProvider theme={theme}>
          <Link to="/AddPatient">
            <Button color="purple">
              <PeopleRoundedIcon /> Add Patients
            </Button>
          </Link>

          <Link to="/EditPatient">
            <Button color="purple">
              <EditIcon /> Edit Patient
            </Button>
          </Link>

          <Link to="/SearchPatient">
            <Button color="purple">
              <PersonSearchIcon /> Search Patient
            </Button>
          </Link>

          <Link>
            <Button color="purple">
              <FileUploadIcon /> Select File
            </Button>
          </Link>

          <Link to="/">
            <Button color="purple" variant="contained">
              Back to Home Page
            </Button>
          </Link>
        </ThemeProvider>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
