import { makeStyles, Container } from "@material-ui/core";

const style = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
}));

const Leftbar = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <div>منوی سمت چپ</div>
    </Container>
  );
};

export default Leftbar;
