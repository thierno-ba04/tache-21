import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';

function Calendrier() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <div>
      <DateTimePicker
        label="Basic date time picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        adapter={AdapterDayjs}
      />
    </div>
  );
}

export default Calendrier;
