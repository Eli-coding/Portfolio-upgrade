import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import { validateEmail } from '../utils/helpers';

export default function ContactMe() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      Validate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required true 
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
        <TextField
          required true
          id="outlined-required"
          label="Last name"
          defaultValue=""
        />
          <TextField
          required true
          id="outlined-required"
          label="Email"
          defaultValue=""
        />
        </div> 
       
        <div>
         <TextField
         required true
          id="outlined-multiline-static"
          label="Type message"
          multiline
          rows={4}
          defaultValue=""
        />
       
      </div>
      <Button variant="contained">submit</Button>
    </Box>
  );
        
       
  
}
