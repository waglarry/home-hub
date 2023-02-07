import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, Select } from '@mui/material';
import './configSettingsTabs.css'

function Profile() {
  return (
    <>
          <CssBaseline />
          <Container style={{
            background: '#ffffff'
          }}>
        <div>
            <h4 className='heading'>Bank Information</h4>
            <div className='Container'>
                <div className='leftColumn'>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Bank Name
                        </InputLabel>
                        <TextField size="normal" type="text" placeholder='Zenth Bank'/>
                    </div>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Phone
                        </InputLabel>
                        <TextField size="normal" type="text" placeholder='033 4599 999'/>
                    </div>
                </div>
                <div className='rightColumn'>
                <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Admin Name
                        </InputLabel>
                        <TextField size="normal" type="text" placeholder='Admin'/>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <h4 className='heading'>Address</h4>
        <div className='Container'>
            <div className='leftColumn'>
            <div className='inputBox'>
                <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                        Country<b style={{color: 'red'}}>*</b>
                    </InputLabel>
                <Select
                    // value={age}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{width: '100%'}}
                    >
                    <MenuItem value={10}>Ghana</MenuItem>
                    <MenuItem value={20}>Canada</MenuItem>
                    <MenuItem value={30}>USA</MenuItem>
                </Select>
            </div>
            <div className='inputBox'>
                <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                        Region
                    </InputLabel>
                <Select
                    // value={age}
                    // onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{width: '100%'}}
                    >
                    <MenuItem value={10}>Greater Accra</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
                {/* <Selection /> */}
                <div className='inputBox'>
                    <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                        Zip code
                    </InputLabel>
                    <TextField size="normal" type="text" placeholder='00233' />
                </div>
            </div>
            <div className='rightColumn'>
                <div className='inputBox'>
                    <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                        Branch
                    </InputLabel>
                    <TextField size="normal" type="text" placeholder='Accra' />
                </div>
                <div className='inputBox'>
                    <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                        Didgital Address<b style={{color: 'red'}}>*</b>
                    </InputLabel>
                    <TextField size="normal" type="text" placeholder='GR-004-09' />
                </div>
                <div className='inputBox'>
                    <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                        Postal Address
                    </InputLabel>
                    <TextField size="normal" type="text" placeholder='P.O Box 633' />
                </div>
            </div>
        </div>
        </div>
      </Container>
    </>
  );
}

export default Profile;