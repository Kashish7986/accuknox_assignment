import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './cssfile/top.css';
import CloseIcon from '@mui/icons-material/Close';
import CenteredTabs from './Tabs';
import BasicStack from './Stack';
import { useState } from 'react';

import MyComponent from './Checkbox';




const TemporaryDrawer=({ searchTerm, filteredOptions }) => {
  const [open, setOpen] = React.useState(false);
//    const [isBlurred, setIsBlurred] = useState(false);
// const [widgets, setWidgets] = useState(["Widget 1", "Widget 2"]);



  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
//   const handleAddWidget = () => {
//      const newWidget = prompt("Enter new widget name:");
//      if (newWidget) {
//        setWidgets([...widgets, newWidget]); 
//      };

  const DrawerList = (
    <Box sx={{ width: 800 }} role="presentation" >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
       <div className='drawer'> <h5 className='item1' > Add Widget</h5>
      <div className='item2'>  <CloseIcon onClick={handleClose}/></div>
      
       </div>
       <p className='item3'>Personalise your dashboard by adding the following widget</p>
       <div className='item4'> <CenteredTabs/> </div>
       {/* <BasicStack/> */}
      <MyComponent options={filteredOptions} searchTerm={searchTerm} />      </List>
      {/* <Divider /> */}
      <div className='btns'>
      <button style={{borderRadius:'5px',backgroundColor:'#03031a',color:'white',width:'100px',height:'31px'}} type={SubmitEvent}>confirm</button>
      <button style={{borderRadius:'5px',width:'100px',height:'31px'}}>cancel</button></div>
      
    </Box>
  );

  return (
    <div>
    
    <Button onClick={toggleDrawer(true)} className="btn1" style={{width:'133px',height:'34px',marginTop: '7px',backgroundColor: 'white',border:'0.8px',borderColor: 'light grey',borderRadius: '8px',color:'black'}} >Add Widget+</Button>
     {/* <button onClick={handleAddWidget}>Add </button>  */}
      {/* <ul>
        {widgets.map((widget) => (
          <li key={widget}>
            <input type="checkbox" id={widget} value={widget} />
            <label htmlFor={widget}>{widget}</label>
          </li>
        ))}
      </ul> */}
      <Drawer style={{width:'400px'}}
      anchor="right"
      width={400}
      open={open} >
        {DrawerList}
        
      </Drawer>
     
    </div>
  );
}
export default TemporaryDrawer;
// onClose={toggleDrawer(false)}