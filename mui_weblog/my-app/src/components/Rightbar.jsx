import { Container, Typography, makeStyles } from "@material-ui/core";
import {
  Home,
  List,
  Settings,
  ExitToApp,
  Camera,
  Storefront,
  Bookmark,
  Person,
} from "@material-ui/icons";

const style = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: 0,
    height: "100vh",
    paddingTop: theme.spacing(10),
    border: "1px solid gray",
    [theme.breakpoints.down("xs")] : {
      backgroundColor : theme.palette.primary.main,
      color : "white",
    }
  },
  items: {
    fontSize : "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    cursor: "pointer",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(3),
      fontSize: "18px",
      fontWeight: "500",
    },
  },
  text: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")] : {
      fontSize:"12px"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const Rightbar = () => {
  const classes = style();
  return (
    <Container className={classes.container}>
      <div className={classes.items}>
        <Home />
        <Typography className={classes.text}>خانه</Typography>
      </div>
      <div className={classes.items}>
        <Person />
        <Typography className={classes.text}>پروفایل</Typography>
      </div>
      <div className={classes.items}>
        <Camera />
        <Typography className={classes.text}>دوربین</Typography>
      </div>
      <div className={classes.items}>
        <List />
        <Typography className={classes.text}>لیست </Typography>
      </div>
      <div className={classes.items}>
        <Storefront />
        <Typography className={classes.text}>فروشگاه</Typography>
      </div>
      <div className={classes.items}>
        <Bookmark />
        <Typography className={classes.text}>ذخیره </Typography>
      </div>
      <div className={classes.items}>
        <Settings />
        <Typography className={classes.text}>تنظیمات</Typography>
      </div>
      <div className={classes.items}>
        <ExitToApp />
        <Typography className={classes.text}>خروج</Typography>
      </div>
    </Container>
  );
};

export default Rightbar;
