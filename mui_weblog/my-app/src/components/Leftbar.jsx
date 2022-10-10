import { Container, Typography, makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const style = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
   paddingTop: theme.spacing(10),
  },
  items: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")] : {
    marginBottom: theme.spacing(3),
    }

  },
  text: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <div className={classes.items}>
        <Home />
        <Typography className={classes.text}>خانه</Typography>
      </div>
      <div className={classes.items}>
        <Home />
        <Typography className={classes.text}>خانه</Typography>
      </div>
      <div className={classes.items}>
        <Home />
        <Typography className={classes.text}>خانه</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
