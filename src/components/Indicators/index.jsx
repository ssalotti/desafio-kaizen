import { Typography, useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import WarningIcon from "@material-ui/icons/Warning";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "100%",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  icon: {
    font: theme.typography.h1.fontSize,
  },
}));

function Indicators() {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <CardHeader title="Indicadores KPI" />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              height="80px"
              bgcolor="#e1e1e1"
              borderRadius={5}
            >
              <Grid container justify="space-around" alignItems="center">
                <Grid item>
                  <Typography component="p">
                    <Typography component="strong" variant="h6">
                      Horas Disponíveis:
                    </Typography>
                    &nbsp;&nbsp;524.620
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="p">
                    <Typography component="strong" variant="h6">
                      % de manutenção:
                    </Typography>
                    &nbsp;&nbsp;2,57
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <PieChart
              data={[
                { title: "One", value: 23, color: "#03a9f4" },
                { title: "Two", value: 60, color: "#f44336" },
                { title: "Three", value: 14, color: "#ffeb3b" },
                { title: "Three", value: 3, color: "#e91e63" },
              ]}
            />
          </Grid>
          <Grid item xs={8}>
            <TableContainer className={classes.card}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Legenda</TableCell>
                    <TableCell align="center">Qtd</TableCell>
                    <TableCell align="center">%</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Corretiva</TableCell>
                    <TableCell align="right">580</TableCell>
                    <TableCell align="right">60%</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="center">Preventiva</TableCell>
                    <TableCell align="right">130</TableCell>
                    <TableCell align="right">23%</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell align="center">Corretiva Programada</TableCell>
                    <TableCell align="right">50</TableCell>
                    <TableCell align="right">14%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Preditiva</TableCell>
                    <TableCell align="right">15</TableCell>
                    <TableCell align="right">3%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Total</TableCell>
                    <TableCell align="right">785</TableCell>
                    <TableCell align="right">100%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              height="100px"
              bgcolor="#424242"
              borderRadius={5}
              padding={2}
              flexDirection='column'
            >
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ color: theme.palette.error.main }}
                  >
                    <WarningIcon
                      fontSize="large"
                      style={{ color: theme.palette.error.main }}
                    />
                    &nbsp;&nbsp;00:04:00
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ color: theme.palette.warning.main }}
                  >
                    <WarningIcon
                      fontSize="large"
                      style={{ color: theme.palette.warning.main }}
                    />
                    &nbsp;&nbsp;00:04:00
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    style={{ color: theme.palette.success.main }}
                  >
                    <WarningIcon
                      fontSize="large"
                      style={{ color: theme.palette.success.main }}
                    />
                    &nbsp;&nbsp;00:04:00
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-between" alignItems="center">
                <Grid item>
                <Typography style={{ color: theme.palette.common.white }} variant="h6">MTTA</Typography>
                </Grid>
                <Grid item>
                  <Typography  style={{ color: theme.palette.common.white }} variant="h6">MTTR</Typography>
                </Grid>
                <Grid item>
                <Typography style={{ color: theme.palette.common.white }} variant="h6">MTTF</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Indicators;
