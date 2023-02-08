import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import './configSettingsTabs.css'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Security() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <>
          <CssBaseline />
          <Container style={{
            background: '#ffffff'
          }}>
        <div>
            <h4 className='heading'>Password</h4>
            <div className='Container'>
                <div className='leftColumn'>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Current Password
                        </InputLabel>
                        <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    // edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                placeholder="Zenth Bank"
                            />
                    </div>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            New Password
                        </InputLabel>
                        <TextField size="normal" type="password" />
                    </div>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Two-step Verification
                        </InputLabel>
                        <TextField size="normal" type="text" placeholder="Entered"/>
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Security Question
                        </InputLabel>
                        <TextField size="normal" type="text" placeholder="Your mother's name"/>
                    </div>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Confirm New Password
                        </InputLabel>
                        <TextField size="normal" type="password" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h4 className='heading'>Devices You're Logged Into</h4>
        </div>
      </Container>
    </>
  );
}

export default Security;