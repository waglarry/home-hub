import React from 'react'
// import { Switch } from 'evergreen-ui'
import Switch from "react-switch";

function NotificationsToggleSwitch() {

const [value, setValue] = React.useState(false)

return (
	 <label>
		<Switch 
			checked={value} 
			onChange={() => setValue(!value)}
			offColor="#222"
			onColor='#1e90ff'
			width={70}
			height={28}
			uncheckedIcon={false}
			checkedIcon={false}
		 />
   </label>
);
}

export default NotificationsToggleSwitch;