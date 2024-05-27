import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TuneIcon from '@mui/icons-material/Tune';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import FeedIcon from '@mui/icons-material/Feed';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link, useNavigate} from "react-router-dom";
import { useAppStore } from '../appStore';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const open = useAppStore((state)=>state.dopen);

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box height={30}/>
      <CssBaseline />
  
      <Drawer variant="permanent" open={open}>
       
        <Divider />
        <List>
        <Link className='logo' >
            
            <img style={{
              width:"40%",
              margin:"auto",
              marginTop:"40px",
             
              backgroundColor:"#FCF7F7"}} src='https://s3-alpha-sig.figma.com/img/cb10/ab06/338410437d1f70eea5201d4b2c4dfedb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czd2TJv4ErsUMq~ZETU7baJebx8yJfIbpA7edY3GMRgnCOaGc39vTIEz0VyCX5~uZlF3Z~ujDArgb4xKcZg8vXOTLz3p7iYnqlyVtaoGySgBi1vA1XLxZ6NTlZ7ewZRg45v0kEI9O1rtNFCkRbEEP4t-foUDCmT7gp2neZX7d8h16P8bFXWS~cN0HO~yrw09a-FOy4fSIloMvj~nE6fn4141jcewmdgAA5a7AzL2qyk5Y1Me4vMRK4Klqa3VhCYEOWpQ8LocuIin2lPbM3qRVeAp3TnW2vmPRgnjFO~60pX8VICG4nXGekC~pkUzu47AHqN8f0fLaOamgFwA46NAVA__' />

            
            </Link>
        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/AllRooms")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <DashboardIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:"#F04C29"
                }}
              >
                <InboxIcon /> 
              </DashboardIcon>
              <ListItemText primary="Add Room" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

        <ListItem className='dd' disablePadding sx={{ display: "block" }}  onClick={()=>{navigate("/AddEvent")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <EditCalendarIcon
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:"#F04C29"
                }}
              >
             
                <InboxIcon /> 
              </EditCalendarIcon>
              <ListItemText primary="Add Event" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/CreateAccount")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <SupervisorAccountIcon 
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:"#F04C29"
                }}
              >
               
                <InboxIcon /> 
              </SupervisorAccountIcon >
              <ListItemText primary="Create Account" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

        <ListItem className='dd' disablePadding sx={{ display: "block" }} onClick={()=>{navigate("/Order")}}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <BorderColorIcon 
                sx={{
                  minwidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:"#F04C29"
                }}
              >
               
                <InboxIcon /> 
              </BorderColorIcon >
              <ListItemText primary="Orders" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

      


        </List>

      </Drawer>
      
    </Box>
  );
}