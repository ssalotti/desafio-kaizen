import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
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
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "purple",
    borderStyle: 'solid',
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: '#fff',
    fontSize: 50
  },

}));

function Tags() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="Análise Quebra Falha"/>
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
            <div className={classes.circle}>
              <Typography>1</Typography>
            </div>
          </Grid>
          <Grid item>
            <Typography align='center'>
              Tempo de Manutenção <p>Fora do Padrão</p>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Tags;
