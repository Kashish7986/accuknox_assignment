import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import  Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
    const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event, value) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, value]);
     } else {
       setSelectedItems(selectedItems.filter((item) => item !== value));
    };
//  checkbox.checked = true;

  const checkboxItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

    

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} direction="column">
      <input type="checkbox" id="myCheckbox" defaultCheckedchecked/>
        {/* <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item> */}
         {checkboxItems.map((item) => (
            <div key={item.value}>
        <input
        type='checkbox'
         id={item.value}
                //   key={item.value}
          checked={selectedItems.includes(item.value)}
          onChange={(event) => handleCheckboxChange(event, item.value)}
        />
        <label htmlFor={item.id}>{item.label}</label>
    </div>
      ))}
      </Stack>
    </Box>
  );
}
}
// {options.map((option) => (
//     <div key={option.id}>
//       <input
//         type="checkbox"
//         id={option.id}
//         checked={selectedOptions.includes(option.id)}
//         onChange={() => handleCheckboxChange(option.id)}
//       />
//       <label htmlFor={option.id}>{option.label}</label>
//     </div>
//   ))}
