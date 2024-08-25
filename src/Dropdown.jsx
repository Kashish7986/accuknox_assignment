import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
import './cssfile/top.css';



const currencies = [
  {
    value: 'Last 2 days',
    label: 'Last 2 days',
  },
  {
    value: 'online',
    label: 'online',
  },
  {
    value: 'last 1 day',
    label: 'last 1 day',
  },
  
];
// .css-1e09ahn-MuiNativeSelect-select-MuiInputBase-input-MuiFilledInput-input {

// }


export default function SelectTextFields() {
  return (
    <div >
        {/* <input type='text'/> */}
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div > 
        
        
        <TextField style={{paddingTop:"12px",paddingLeft:"5px",height:"3px"}}
          id="filled-select-currency-native"
          select
        //   label="Native select"
          defaultValue="Last 2 days"
          SelectProps={{
            native: true,
          }}
        //   helperText="Please select your currency"
        //   variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
          </Box> 
    </div>
  );
}
