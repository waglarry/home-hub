import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './configSettingsTabs.css'
import { Divider, Slider } from '@mui/material';
import AdminMenuIcon from '../components/AdminMenuIcon';

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
                    <table border={0} className="adminRolesTable">
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
                            <td>Active</td>
                            <td>
                            <AdminMenuIcon />
                            </td>
                        </tbody>
                    </table>
                <Divider style={{height: 40}} />
            </div>
            <div>
            <h4 className='heading'>Roles and Permissions</h4>
                    <table border={0} className="adminRolesTable">
                        <thead>
                            <td>Status</td>
                            <td>Description</td>
                            <td>Color</td>
                            <td>No. of users</td>
                            <td>Action</td>
                        </thead>
                        <tbody>
                            <td>Approved/Unpaid</td>
                            <td>
                                For user whoes loan has been approved
                            </td>
                            <td>
                                color
                            </td>
                            <td>30</td>
                            <td>
                            <AdminMenuIcon />
                            </td>
                        </tbody>
                        <tbody>
                            <td>Approved/Unpaid</td>
                            <td>
                                For user whoes loan has been approved
                            </td>
                            <td>
                                color
                            </td>
                            <td>30</td>
                            <td>
                            <AdminMenuIcon />
                            </td>
                        </tbody>
                        <tbody>
                            <td>Approved/Unpaid</td>
                            <td>
                                For user whoes loan has been approved
                            </td>
                            <td>
                                color
                            </td>
                            <td>30</td>
                            <td>
                            <AdminMenuIcon />
                            </td>
                        </tbody>
                    </table>
                <Divider style={{height: 40}} />
            </div>
      </Container>
    </>
  );
}

export default Administration;