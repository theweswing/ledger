import {useState} from "react";
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
function SignUp({setUser,setHasAccount}) {


    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [passwordConfirmation,setPasswordConfirmation]=useState("")
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [email,setEmail]=useState("")
    const [emailValid, setEmailValid] = useState(true);
    const [phone,setPhone]=useState("")
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")

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

      const checkPassword = () => {
        if (password === passwordConfirmation) {
          setPasswordMatch(true);
          return passwordMatch;
        } else {
          setPasswordMatch((passwordMatch) => !passwordMatch);
        }
      };

    function handleLoginButton(){
        setHasAccount(true)
    }

    function handleSubmit(e){
        e.preventDefault()
        checkEmail()
        checkPassword()
        if (checkEmail && checkPassword) {
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  username: username,
                  password: password,
                  password_confirmation: passwordConfirmation,
                  email: email,
                  phone: phone,
                  first_name: firstName,
                  last_name: lastName
              }),
            })
            .then((res) => {
                if (res.ok) {
                  res.json().then((newUser) => {
                    console.log(newUser)
                    setUser(newUser);
                    alert(
                      `You have sucessfully signed up with email ${newUser.email}. Log in and keep track of everything you've lent out!`
                    );
                  });
                } else {
                  res.json().then((errors) => console.log(errors));
                }
              });
            }}

        const theme = createTheme();

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
                    Sign up
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          autoComplete="given-name"
                          name="firstname"
                          id="firstname"
                          label="First name"
                          autoFocus
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          autoComplete="family-name"
                          id="lastName"
                          label="Last Name"
                          name="lastname"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Grid>
        
                      <Grid item xs={12}>
                        {emailValid ? (
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
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
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          autoComplete="phone"
                          id="phone"
                          label="Phone Number"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          autoComplete="username"
                          id="username"
                          label="Username"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {passwordMatch ? (
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        ) : (
                          <TextField
                            error
                            required
                            fullWidth
                            id="filled-error-helper-text"
                            label="Password"
                            helperText="Passwords don't match, please try again"
                            variant="filled"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        {passwordMatch ? (
                          <TextField
                            required
                            fullWidth
                            name="password-match"
                            label="Type Password Again"
                            type="password"
                            id="password-match"
                            autoComplete="new-password-match"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                          />
                        ) : (
                          <TextField
                            error
                            required
                            fullWidth
                            id="filled-error-helper-text"
                            label="Type Password Again"
                            helperText="Passwords don't match, please try again"
                            variant="filled"
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                          />
                        )}
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link variant="body2" onClick={handleLoginButton}>
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          );
// return (<div>
//     <h3>Please sign up to enjoy Ledger's services. If you already have an account, please Log In</h3>
//     <form onSubmit={handleSubmit}>
//         <label>Username: </label>
//         <input type="text" name="username" onChange={handleUsername}></input><br></br><br></br>
//         <label>Password: </label>
//         <input type="text" name="password" onChange={handlePassword}></input><br></br><br></br>
//         <label>Confirm Password: </label>
//         <input type="text" name="passwordConfirmation" onChange={handlePasswordConfirmation}></input><br></br><br></br>
//         <label>Email: </label>
//         <input type="text" name="email" onChange={handleEmail}></input><br></br><br></br>
//         <label>Phone: </label>
//         <input type="text" name="phone" onChange={handlePhone}></input><br></br><br></br>
//         <label>First Name: </label>
//         <input type="text" name="firstName" onChange={handleFirstName}></input><br></br><br></br>
//         <label>Last Name: </label>
//         <input type="text" name="lastName" onChange={handleLastName}></input><br></br><br></br>
//         <button type="submit">Sign Me Up, Scotty!</button> 
//     </form>
//     <button onClick={handleLoginButton}>I already have an account</button>

// </div>)
}

export default SignUp