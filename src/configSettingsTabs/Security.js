import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import './configSettingsTabs.css'

function Security() {
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
                        <TextField size="normal" type="password" placeholder='Zenth Bank'/>
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