import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [login, setLogin] = useState("");
  const [errors, setErrors] = useState([]);

  const checkEmail = () => {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailValid(true);
      return emailValid;
    } else {
      setEmailValid((emailValid) => !emailValid);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkEmail();
    const user = {
      email,
      password,
    };
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
      } else {
        res.json().then((errors) => console.log(errors));
      }
    });

    setEmail("");
    setPassword("");
    e.target.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {emailValid ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <TextField
                error
                required
                fullWidth
                id="filled-error-helper-text"
                label="Email Address"
                helperText="Must be a valid email containing '@'"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Score Counter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const theme = createTheme();

export default Login;


// import {useState} from "react";

// function Login({setUser,setHasAccount}) {

//     const [username,setUsername]=useState("")
//     const [password,setPassword]=useState("")
//     const [passwordConfirmation,setPasswordConfirmation]=useState("")

//     function handleLoginButton(){
//         setHasAccount(false)
//     }

//     function handleUsername(e){
//         console.log(e.target.value)
//         setUsername(e.target.value)
//     }

//     function handlePassword(e){
//         console.log(e.target.value)
//         setPassword(e.target.value)
//     }

//     // function handlePasswordConfirmation(e){
//     //     console.log(e.target.value)
//     //     setPasswordConfirmation(e.target.value)
//     // }

//     function handleSubmit(e){
//         e.preventDefault()
//         fetch("http://localhost:3000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                   username: username,
//                   password: password
//               }),
//             })
//               .then((r) => r.json())
//               .then((user) => {console.log(user); 
//                 setUser(user)})
//         }
    
// return (<div>
//     <h3>Please log in to enjoy Ledger's services.</h3>
//     <form onSubmit={handleSubmit}>
//         <label>Username: </label>
//         <input type="text" name="username" onChange={handleUsername}></input><br></br><br></br>
//         <label>Password: </label>
//         <input type="text" name="password" onChange={handlePassword}></input><br></br><br></br>
//         <button type="submit">Log Me In, Scotty!</button> 
//     </form>
//     <button onClick={handleLoginButton}>I need to make an account</button>

// </div>)
// }

// export default Login