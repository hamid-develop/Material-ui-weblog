import Navbar from "./components/Navbar";
import { Grid, makeStyles } from "@material-ui/core";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import AddPost from "./components/AddPost";

const style = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = style();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.left}>
          <Leftbar />
        </Grid>
      </Grid>
      <AddPost />
    </div>
  );
}
export default App;
