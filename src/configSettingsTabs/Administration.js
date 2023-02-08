import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './configSettingsTabs.css'
import { Divider, Slider } from '@mui/material';
import AdminMenuIcon from '../components/AdminMenuIcon';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

function Administration() {
  return (
    <>
          <CssBaseline />
          <Container style={{
            background: '#ffffff'
          }}>
        <div>
            <h4 className='heading'>Payment Limits</h4>
            <div className='NotificationsContainer'>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <div>
                        <label>Online transactions </label>
                        <b className='paymentAmount'>GHC 40,000.00</b> 
                        <span className='paymentDay'>/ day</span>
                    </div>
                  </div>
                  <div className='notificationsRightColumn'>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{width: "50%"}}/>
                  {/* <AdminPaymentsLevelSlider /> */}
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <div>
                        <label>Withdrawals </label>
                        <b className='paymentAmount'>GHC 200,000.00</b> 
                        <span className='paymentDay'>/ day</span>
                    </div>
                  </div>
                  <div className='notificationsRightColumn'>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{width: "50%"}}/>
                  {/* <AdminPaymentsLevelSlider /> */}
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <div>
                        <label>Private transactions </label>
                        <b className='paymentAmount'>GHC 200,000.00</b> 
                        <span className='paymentDay'>/ day</span>
                    </div>
                  </div>
                  <div className='notificationsRightColumn'>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx={{width: "50%"}}/>
                  {/* <AdminPaymentsLevelSlider /> */}
                  </div>
                </div>
            </div>
        </div>
        <Divider />
        <div>
            <h4 className='heading'>Roles and Permissions</h4>
                    <table border={0} className="adminRolesTable1">
                        <thead>
                            <td>Name</td>
                            <td>User type</td>
                            <td>Role</td>
                            <td>Status</td>
                            <td>Action</td>
                        </thead>
                        <tbody>
                            <td>Admin</td>
                            <td>Stuff</td>
                            <td>IT</td>
                            <td>
                                <Chip sx={{
                                    height: '0',
                                    color: 'dodgerblue'
                                }} label="Active" />
                            </td>
                            <td>
                            <AdminMenuIcon />
                            </td>
                        </tbody>
                    </table>
                <Divider style={{height: 40}} />
            </div>
            <div>
            <h4 className='heading'>User Statuses</h4>
                    <table border={0} className="adminRolesTable">
                        <thead>
                            <td style={{
                                minWidth: '1rem',
                                textAlign: 'left',
                                paddingLeft: '1rem'
                            }}>Status</td>
                            <td style={{
                                minWidth: '1rem',
                                textAlign: 'left',
                                paddingLeft: '1rem'
                            }}>Description</td>
                            <td>Color</td>
                            <td style={{
                                minWidth: '10rem'
                            }}>No. of users</td>
                            <td>Action</td>
                        </thead>
                        <tbody>
                           <tr style={{marginBottom: '1rem'}}>
                           <td style={{
                                minWidth: '3rem',
                                textAlign: 'left'
                            }}>Approved/Unpaid</td>
                            <td style={{
                                textAlign: 'left',
                                fontSize: '14px'
                            }}>
                                For users whose loan <br/> has been approved
                            </td>
                            <td style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minWidth: '4rem'
                            }}>
                                <div style={{
                                    background: 'brown',
                                    width: '3rem',
                                    height: '1rem',
                                    margin: '1rem 0'
                                }}></div>
                            </td>
                            <td>30</td>
                            <td style={{minWidth: '6rem'}}>
                            <AdminMenuIcon />
                            </td>
                           </tr>
                           <tr style={{marginBottom: '1rem'}}>
                           <td style={{
                                minWidth: '4rem',
                                textAlign: 'left'
                            }}>Rejected/Overdue</td>
                            <td style={{
                                textAlign: 'left',
                                fontSize: '14px'
                            }}>
                                For users whose loan <br/> has been approved
                            </td>
                            <td style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <div style={{
                                    background: 'red',
                                    width: '3rem',
                                    height: '1rem',
                                    margin: '1rem 0'
                                }}></div>
                            </td>
                            <td>30</td>
                            <td style={{minWidth: '6rem'}}>
                            <AdminMenuIcon />
                            </td>
                           </tr>
                           <tr style={{marginBottom: '1rem'}}>
                           <td style={{
                                minWidth: '2rem',
                                textAlign: 'left'
                            }}>Paid</td>
                            <td style={{
                                textAlign: 'left',
                                fontSize: '14px'
                            }}>
                                For users whose loan <br/> has been approved
                            </td>
                            <td style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <div style={{
                                    background: 'green',
                                    width: '3rem',
                                    height: '1rem',
                                    margin: '1rem 0'
                                }}></div>
                            </td>
                            <td>30</td>
                            <td style={{minWidth: '6rem'}}>
                            <AdminMenuIcon />
                            </td>
                           </tr>
                        </tbody>
                    </table>
                <Divider style={{height: 40}} />
            </div>
            <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h4 className='heading'>Customize Email Message</h4>
                <div>Add new message button</div>
            </div>
            <div className='NotificationsContainer'>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Title
                        </InputLabel>
                        <TextField style={{
                            background: '#b1b1b1a9'
                        }} size="small" type="text" />
                    </div>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Description
                        </InputLabel>
                        <TextField style={{
                            background: '#b1b1b1a9'
                        }} size="normal" type="text" />
                    </div>
                    <div className='inputBox'>
                        <InputLabel shrink htmlFor="bootstrap-input" className='inputLabel'>
                            Message
                        </InputLabel>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            rows={12}
                            style={{
                                background: '#b1b1b1a9'
                            }}
                            />
                    </div>
            </div>
            </div>
      </Container>
    </>
  );
}

export default Administration;