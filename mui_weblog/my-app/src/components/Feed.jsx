import { makeStyles, Container } from "@material-ui/core";

const style = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <div>قسمت مربوط به پست ها</div>
    </Container>
  );
};

export default Feed;
