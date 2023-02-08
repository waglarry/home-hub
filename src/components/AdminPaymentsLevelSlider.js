import { Slider } from '@mui/material';
import React from 'react'

function AdminPaymentsLevelSlider() {

    const marks = [
        {
          value: 0,
          label: '0°C',
        },
        {
          value: 20,
          label: '20°C',
        },
        {
          value: 37,
          label: '37°C',
        },
        {
          value: 100,
          label: '100°C',
        },
      ];

      function valuetext(value) {
        return `${value}°C`;
      }

return (
    <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetext}
        defaultValue={10}
        marks={marks}
        sx={{width: '30%'}}
    />
);
}

export default AdminPaymentsLevelSlider;