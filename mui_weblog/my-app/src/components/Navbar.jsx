import { useState } from "react";
import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";

const styles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.down("xs")] : {
       display : (props) => (props.open ? "flex" : "none"),
    }
  },
  input: {
    color: "white",
    marginRight: theme.spacing(2),
  },
  badge: {
    display : (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
  searchIcon: {
      marginLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")] : {
        display: "none",
    }
  },
  cancel: {
    [theme.breakpoints.up("sm")] : {
        display: "none",
    }
  }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
  const classes = styles({open});
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.logoLg}>وبلاگ تاپلرن</Typography>
        <Typography className={classes.logoSm}>تاپلرن</Typography>
        <Typography>
          <div className={classes.search}>
            <Search />
            <InputBase placeholder="جستجو کنید" className={classes.input} />
            <Cancel className={classes.cancel} onClick={()=> setOpen(false)} />
          </div>
        </Typography>
        <div className={classes.badge}>
          <Search className={classes.searchIcon} onClick={()=> setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.icon}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.icon}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Cindy Baker"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/220px-Elon_Musk_Royal_Society_%28crop1%29.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
