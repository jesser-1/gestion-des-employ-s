import { Alert, Box, Button, Grid, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import MySideNav from "../components/MySideNav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add } from "../features/employe";

function AddEmployee() {
  const [id, setId] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [invalidEmailErrorMessage, setInvalidEmailErrorMessage] = useState("");
  const [alertVisibilty, setAlertVisibilty] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertText, setAlertText] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.employe.value);
  const emailValidator = (value) =>
    new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Veuillez saisir un e-mail valide.";

  function handleSubmit() {
    setInvalidEmailErrorMessage(emailValidator(email));
    if (
      id !== "" &&
      nom !== "" &&
      prenom !== "" &&
      age !== "" &&
      email !== "" &&
      position !== ""
    ) {
      if (emailValidator(email) === "") {
        setAlertText("Ajout avec succées");
        setAlertSeverity("success");
      } else {
        setAlertText("Veuillez saisir un e-mail valide.");
        setAlertSeverity("error");
      }
    } else {
      setAlertText("Veuillez remplir tous les champs");
      setAlertSeverity("error");
    }
    setAlertVisibilty(true);
  }

  function displayAlert() {
    if (alertVisibilty) {
      return (
        <Snackbar
          open={alertVisibilty}
          autoHideDuration={6000}
          onClose={() => setAlertVisibilty(false)}
        >
          <Alert
            onClose={() => setAlertVisibilty(false)}
            severity={alertSeverity}
            sx={{ width: "100%" }}
          >
            {alertText}
          </Alert>
        </Snackbar>
      );
    }
  }
  return (
    <div className="page">
      {displayAlert()}
      <MySideNav />
      <h1>Ajouter Employé</h1>

      <Box
        sx={{
          width: "60%",
          marginTop: "30px",
          marginLeft: "20%",
          fontSize: "4rem",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              id="id"
              label="id"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="nom"
              label="Nom"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="prenom"
              label="Prénom"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="age"
              type="number"
              label="Age"
              variant="outlined"
              style={{ width: "100%" }}
              InputProps={{
                inputProps: {
                  max: 62,
                  min: 18,
                },
              }}
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="email"
              error={invalidEmailErrorMessage.length === 0 ? false : true}
              label="Email"
              variant="outlined"
              style={{ width: "100%" }}
              helperText={invalidEmailErrorMessage}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="position"
              label="Position"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(e) => setPosition(e.target.value)}
              value={position}
            />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              style={{ width: "100%" }}
              onClick={() => {
                handleSubmit();
                dispatch(
                  add({
                    id: id,
                    nom: nom,
                    prenom: prenom,
                    age: age,
                    email: email,
                    position: email,
                  })
                );
              }}
            >
              Ajouter
            </Button>
          </Grid>
        </Grid>
      </Box>
      <h3>{state.id}</h3>
    </div>
  );
}
export default AddEmployee;
