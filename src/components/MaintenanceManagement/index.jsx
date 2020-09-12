import { Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    paddingTop: theme.spacing(2),
  },
  card: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  chip: {
    width: "100%",
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

function MaintenanceManagement() {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0}>
      <CardHeader title="Gerenciamento Manutenção" />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item container spacing={2} xs={4}>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  avatar={<WatchLaterIcon />}
                  title="Manutenção Corretiva"
                  subheader="Ordem de Serviço"
                />
              </Card>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  color="primary"
                  label="NPR A:4"
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  color="primary"
                  label="NPR B:#"
                />
              </Grid>
              <Grid item xs={4}>
                <Chip
                  className={classes.chip}
                  color="primary"
                  label="NPR C:#"
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chip
                avatar={<Avatar>3</Avatar>}
                label="Ordem serviço - Ag. Autorização"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Chip color="primary" label="Top 3" />
            </Grid>

            <Grid item xs={12}>
              <TableContainer className={classes.card}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">NPR</TableCell>
                      <TableCell align="center">Ativo</TableCell>
                      <TableCell align="center">T. Abertura</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        <Avatar>A</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">01:10:25</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Avatar>B</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">01:10:25</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Avatar>A</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">01:10:25</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Grid item container spacing={2} xs={4}>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  avatar={<WatchLaterIcon />}
                  title="Ordens de Serviço"
                  subheader="Em Andamento"
                />
              </Card>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item>
                <Chip color="primary" label="Corretiva: 4" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="Preventiva: 2" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="Preditiva: 1" />
              </Grid>

              <Grid item>
                <Chip color="primary" label="Mau uso: 0" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="Devolução: 0" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="Ent. Tec: 0" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="Top 3" />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box padding={2} />
            </Grid>
            <Grid item xs={12}>
              <TableContainer className={classes.card}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">NPR</TableCell>
                      <TableCell align="center">Ativo</TableCell>
                      <TableCell align="center">Local</TableCell>
                      <TableCell align="center">T. Abertura</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        <Avatar>A</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">Injetora Corretiva</TableCell>
                      <TableCell align="right">01:10:25</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Avatar>A</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">Produção Corretiva</TableCell>
                      <TableCell align="right">01:10:25</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Avatar>A</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">Produção Corretiva</TableCell>
                      <TableCell align="right">01:10:25</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Grid item container spacing={2} xs={4}>
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  avatar={<AvTimerIcon />}
                  title="Manutenção Preventiva"
                  subheader="Ag Programação"
                />
              </Card>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item>
                <Chip color="primary" label="100%: 4" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="90%: 2" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="80%: 1" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="70%: 0" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="60%: 2" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="50%: 0" />
              </Grid>
              <Grid item>
                <Chip color="primary" label="Top 3" />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box padding={2} />
            </Grid>
            <Grid item xs={12}>
              <TableContainer className={classes.card}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">NPR</TableCell>
                      <TableCell align="center">Ativo</TableCell>
                      <TableCell align="center">Local</TableCell>
                      <TableCell align="center">% Troca</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        <Avatar>A</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">Injetora</TableCell>
                      <TableCell align="right">50%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        <Avatar>B</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">Produção</TableCell>
                      <TableCell align="right">30%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">
                        <Avatar>A</Avatar>
                      </TableCell>
                      <TableCell align="right">T.CNC | 1514</TableCell>
                      <TableCell align="right">Produção</TableCell>
                      <TableCell align="right">50%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MaintenanceManagement;
