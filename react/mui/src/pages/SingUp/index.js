import { useState } from "react";
import { Card, CardContent, Box, TextField, OutlinedInput, InputAdornment , IconButton, InputLabel, FormControl, Button, CardActions, Typography} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { VisibilityOff, Visibility} from '@mui/icons-material';
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
    return(
    <Box
    component="div"
    sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <Card sx={{ width: 500, height: 550 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <LockOpenIcon  sx={{ marginTop: 5 }}/>
          <h1>Sign Up</h1>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", width: "80%", gap: 3, marginTop: 3 }}>
            <Box component={"div"} sx={{ display: "flex", gap: 1 }}>
             <TextField  label="Email" variant="outlined" />
             <TextField  label="UserName" variant="outlined" />
            </Box>
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
           <FormControl variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password" sx={{ width : 200 }}>Password Confirm</InputLabel>
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
            label="Password Confirm"
          />
           </FormControl>
           <Button color="info" variant="contained" fullWidth={true} size="large">Register</Button>
          </Box>
        </CardContent>
        <CardActions>
        <Typography variant="body2" m="auto">You already Have an account. <Link to={"/"}>signIn</Link></Typography> 
        </CardActions>
      </Card>
    </Box>);
}

export default SignUp;