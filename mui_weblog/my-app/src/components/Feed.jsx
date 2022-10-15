import { makeStyles, Container } from "@material-ui/core";
import Post from './Post';

const style = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
   
  },
}));

const Feed = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
     <Post />
     <Post />
     <Post />
     <Post />
    </Container>
  );
};

export default Feed;
