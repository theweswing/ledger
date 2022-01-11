import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Header({user}) {
   
    return (
        <AppBar position="static" sx={{ p: 2 }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Ledger 
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Home
                  </Button>
              </Box>
    
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
//     if (user) { return (
//         <div>
//             <h1>LEDGER</h1>
//         <p>Get Your Shit Back From Your Friends, Or Die Trying</p>
//         <p>{user.username}</p>
//         </div>
//     )
// }
// else {
//     return (
//         <div>
//             <h1>LEDGER</h1>
//         <p>Get Your Shit Back From Your Friends, Or Die Trying</p>
//         </div>
//     )
// }}
    }
export default Header