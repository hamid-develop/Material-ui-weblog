import { Button, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const style = makeStyles((theme) => ({
  button: {
    color : "white",
    backgroundColor : theme.palette.success.dark
  }
}))

function App() {
  const classes = style()
  return (
    <div className="App">
      <Button
        variant="outlined"
        size="large"
        endIcon={<Delete />}
       className={classes.button}
      >
        سلام دنیا
      </Button>
    </div>
  );
}

export default App;
