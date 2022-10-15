import { Tooltip, Fab, makeStyles } from "@material-ui/core";
import {Add} from '@material-ui/icons'

const style = makeStyles((theme) => ({
  add: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
  },
}));

const AddPost = () => {
  const classes = style();
  return (
    <div>
      <Tooltip title="افزودن پست جدید" aria-label="add">
        <Fab color="primary" className={classes.add}>
          <Add />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default AddPost;
