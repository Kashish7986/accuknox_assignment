// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';





// <div class="notification-icon">
//   <i class="fa fa-bell"></i>
//   <span class="notification-count">3</span>
// </div>

// const notificationIcon=()=> {
//     position: 'relative',
//     fontSize: '24px',
//     color: '#666',
//   }
  
//   .notification-count {
//     position: absolute;
//     top: -10px;
//     right: -10px;
//     background-color: #ff0000;
//     color: #fff;
//     border-radius: 50%;
//     padding: 2px 5px;
//     font-size: 12px;
//   }

-import DropDownMenu from 'material-ui/DropDownMenu';
+import Select from '@material-ui/core/Select';

-<DropDownMenu></DropDownMenu>
+<Select value={this.state.value}></Select>
