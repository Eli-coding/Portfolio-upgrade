import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactMe() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="First Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Last Name"
        />
          <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email"
        />
        </div> 
       
        <div>
         <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Type message"
        />
       
      </div>
    </Box>
  );
        
       
  
}
