import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: theme.spacing(2),
  },
  card: {
    minHeight: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  chip: {
    width: "100%",
  },
}));

function Tags() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="Peças Pendentes" />
      <Divider />
      <CardContent>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item>
            <Chip
              label="4"
              avatar={
                <Avatar>
                  <SettingsIcon />
                </Avatar>
              }
            />
          </Grid>
          <Grid item>
            <Chip
              label="4"
              avatar={
                <Avatar>
                  <SettingsIcon />
                </Avatar>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Equipamento Aguardando
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Tags;
