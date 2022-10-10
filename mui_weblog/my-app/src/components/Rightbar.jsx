import { makeStyles, Container } from "@material-ui/core";

const style = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
}));

const Rightbar = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <div>منوی سمت راست</div>
    </Container>
  );
};

export default Rightbar;
