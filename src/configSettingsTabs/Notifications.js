import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './configSettingsTabs.css'
import NotificationsToggleSwitch from '../components/NotificationsToggleSwitch';
import { Divider } from '@mui/material';

function Notifications() {
  return (
    <>
          <CssBaseline />
          <Container style={{
            background: '#ffffff'
          }}>
        <div>
            <h4 className='heading'>General</h4>
            <div className='NotificationsContainer'>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Receive messages from Homehub</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Receive messages about your account</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Receive updates on new policies</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Receive notifications when clients send messages</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Always ask for password when going to perform an action</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
            </div>
        </div>
        <Divider />
        <div>
            <h4 className='heading'>Reminders</h4>
            <div className='NotificationsContainer'>
            <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Receive reminders of appointments</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Receive reminders when billings are overdue a week after</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
                <div className='generalTextRow'>
                  <div className='notificationsLeftColumn'>
                    <label>Receive reminders when Icons are due 3 days before</label>
                  </div>
                  <div className='notificationsRightColumn'>
                      <NotificationsToggleSwitch />
                  </div>
                </div>
                <Divider />
            </div>
        </div>
      </Container>
    </>
  );
}

export default Notifications;