import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import './cssfile/handling.css';


const ITEM_HEIGHT = 18;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 1.5 + ITEM_PADDING_TOP,
      width: 250,
      padding: '4.5px 8px',
    },
  },
};

const names = [
  'Last 2 days',
  'Last 1 day',
  '1 hour ',
  'online',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightSmall
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
        <div className='icons'>
        <AccessTimeFilledIcon style={{marginTop:'14px',position: 'absolute', zIndex: '1',marginLeft: '12px'}}/>
        <label ></label>
      <FormControl   sx={{ m: 1, width: 170, mt: 1 ,backgroundColor: 'white',marginTop:'10px',borderColor: 'rgb(218, 218, 215)',borderRadius:'10px',borderWidth:'1px'}} >
        <Select style={{paddingLeft:'25px',height:'33px'}} 
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em> Last 2 days</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" style={{maxHeight: '138px'}}>
            <em></em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </div>
  );
}
