import Navbar from "./components/Navbar";
import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

const style = makeStyles((theme) => ({
  right: {
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
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
