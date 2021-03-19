import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
  },
}));

const NoDataView = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h4">There is no data to display for now.</Typography>
    </Container>
  );
  return null;
};

export default NoDataView;
