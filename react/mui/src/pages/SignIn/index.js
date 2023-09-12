import { useState } from "react";
import { Card, CardContent, Box, TextField, OutlinedInput, InputAdornment , IconButton, InputLabel, FormControl, Button, CardActions, Typography } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { VisibilityOff, Visibility} from '@mui/icons-material';
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
    return(
    <Box
    component="div"
    sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <Card sx={{ width: 500, height: 500 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <LockOpenIcon  sx={{ marginTop: 5 }}/>
          <h1>Sign In</h1>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", width: "80%", gap: 3, marginTop: 4 }}>
           <TextField  label="Email" variant="outlined" onChange={(e) => console.log(e.target)} />
           <FormControl variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
           <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
           </FormControl>
           <Button color="info" variant="contained" fullWidth={true} size="large">Login</Button>
          </Box>
        </CardContent>
        <CardActions>
          <Typography variant="body2" m="auto">I do not have an account! <Link to={"/signup"}>signup</Link></Typography> 
        </CardActions>
      </Card>
    </Box>);
}

export default SignIn;