import { makeStyles, Container, TextField } from "@material-ui/core";

const style = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
}));

const Leftbar = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <div>
      <TextField  id="outlined-basic"  variant="outlined" placeholder="نام خانوادگی" />
      </div>
    </Container>
  );
};

export default Leftbar;
