import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#FFFF8F",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#000000",
    color: "#FFEA00",
    "&:hover": {
      backgroundColor: "#FFEA00",
      color: "#000000",
    },
  },
  buttonClear: {
    backgroundColor: "#FFEA00",
    color: "#000000",
    "&:hover": {
      backgroundColor: "#000000",
      color: "#FFEA00",
    },
  },
  input: {
    fontSize: 18,
  },
}));
