import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionIcon from "@material-ui/icons/Description";
import React from "react";



const useStyles = makeStyles((theme) => ({
 
  card: {
    minHeight: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  icon: {
    font: theme.typography.h1.fontSize
  },
}));

function Tags() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title="Etiquetas TPM" />
      <Divider />
      <CardContent>
        <Grid container direction='column' alignItems='center' justify='center' spacing={2}>
          <Grid item>
            <Badge badgeContent={0} showZero color='primary'>
              <DescriptionIcon style={{fontSize: 70}} />
            </Badge>
          </Grid>
          <Grid item>
            <Badge badgeContent={0} showZero color='primary'>
              <DescriptionIcon style={{fontSize: 70}}/>
            </Badge>
          </Grid>
          <Grid item>
            <Badge badgeContent={0} showZero color='primary'>
              <DescriptionIcon style={{fontSize: 70}} />
            </Badge>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Tags
