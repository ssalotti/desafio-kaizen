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
import WarningIcon from '@material-ui/icons/Warning';
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

function Tags() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="Equipe de manutenção" />
      <Divider />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Chip
              avatar={<Avatar>3</Avatar>}
              label="Ordem serviço - Time de Manutenção"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Chip label="Time de Manutenção" />
          </Grid>
          <Grid item xs={12}>
              <TableContainer className={classes.card}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Capacidade</TableCell>
                      <TableCell align="center">Técnico</TableCell>
                      <TableCell align="center">OS PRG</TableCell>
                      <TableCell align="center">Turno</TableCell>
                      <TableCell align="center">Alerta GHC</TableCell>


                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">73%</TableCell>
                      <TableCell align="right">André Wotz</TableCell>
                      <TableCell align="right">2</TableCell>
                      <TableCell align="right">1</TableCell>
                      <TableCell align="right"><WarningIcon /></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">100%</TableCell>
                      <TableCell align="right">Pedro Luiz</TableCell>
                      <TableCell align="right">0</TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">20%</TableCell>
                      <TableCell align="right">Ricardo Gomes</TableCell>
                      <TableCell align="right">1</TableCell>
                      <TableCell align="right">2</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">20%</TableCell>
                      <TableCell align="right">Rodrigo Berg</TableCell>
                      <TableCell align="right">2</TableCell>
                      <TableCell align="right">1</TableCell>
                      <TableCell align="right"><WarningIcon /></TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">73%</TableCell>
                      <TableCell align="right">Lucas Alves</TableCell>
                      <TableCell align="right">1</TableCell>
                      <TableCell align="right">2</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Tags;
