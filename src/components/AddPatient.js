import React from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Divider,
  Button,
} from "@mui/material";
import SideDrawer from "../utils/SideDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  palette: {
    purple: createColor("#d0a0e7"),
    apple: createColor("#5DBA40"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
  },
});

const AddPatient = () => {
  return (
    <div>
      <SideDrawer />
      <Typography variant="h3" align="center">
        Add Patient Details
      </Typography>
      <ThemeProvider theme={theme}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} sm={4} item>
                <TextField label="Patient ID" variant="outlined" fullWidth />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="Patient Name (First, Last Name)"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="Location"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={2} item>
                <TextField
                  type="number"
                  label="Age"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={5} item>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={2} item>
                <InputLabel variant="standard" fullWidth>
                  Gender
                </InputLabel>
                <Select fullWidth label="Gender">
                  <MenuItem>Male</MenuItem>
                  <MenuItem>Female</MenuItem>
                  <MenuItem>Prefer not to say</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField label="Prescription" variant="outlined" fullWidth />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Dose" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={4} item>
                <InputLabel variant="standard" fullWidth>
                  Visit Date
                </InputLabel>
                <TextField type="date" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={4} item>
                <InputLabel variant="standard" fullWidth>
                  Next Date
                </InputLabel>
                <TextField type="date" variant="outlined" fullWidth required />
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />

            <Grid container spacing={1}>
              <Grid xs={12} sm={5} item>
                <TextField
                  label="Physician ID"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={5} item>
                <TextField label="Dose" variant="outlined" fullWidth />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField label="Bill" variant="outlined" fullWidth />
              </Grid>
            </Grid>
            <Button color="purple" variant="contained">
              Add +
            </Button>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default AddPatient;
