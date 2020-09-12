import Appbar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import FailureBreakAnalysis from "./components/FailureBreakAnalysis";
import Indicators from "./components/Indicators";
import MaintenanceManagement from "./components/MaintenanceManagement";
import MaintenanceTeam from "./components/MaintenanceTeam";
import PendingPieces from "./components/PendingPieces";
import Tags from "./components/Tags";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: theme.spacing(2),
  },
  card: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Appbar color="inherit">
        <Toolbar>
          <Typography> Manutenção / Assistência técnica </Typography>
        </Toolbar>
      </Appbar>
      <Toolbar />
      <div className={classes.root}>
        <Container component="main" maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <MaintenanceManagement />
            </Grid>
            <Grid item xs={2}>
              <Tags />
            </Grid>
            <Grid item xs={5}>
              <MaintenanceTeam />
            </Grid>
            <Grid item xs={5}>
              <Indicators />
            </Grid>
            <Grid xs={2} >
              <Grid item xs={12}>
                <PendingPieces />
              </Grid>
              <Grid item xs={12}>
                <FailureBreakAnalysis />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default App;
