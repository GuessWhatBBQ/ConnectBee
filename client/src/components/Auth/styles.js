import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#000000",
    color: "#FFEA00",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#FFEA00",
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#FFEA00",
      color: "#000000",
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    color: "#FFEA00",
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#FFEA00",
      color: "#000000",
    },
  },
}));
