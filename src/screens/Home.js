import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from '../components/navigation/DrawerMenu';
import Profile from './Profile';
import BasicGraphScreen from './BasicGraphScreen';
import SegmentedGraphScreen from './SegmentedGraphScreen';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('Home');

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {currentPage}
          </Typography>
        </Toolbar>
      </AppBar>

      <DrawerMenu
        open={open}
        handleDrawerClose={handleDrawerClose}
        setCurrentPage={setCurrentPage}
      />

      <Main open={open}>
        <DrawerHeader />
        {currentPage === 'Home' && <Typography paragraph>Welcome to the Home page!</Typography>}
        {currentPage === 'Profile' && <Profile />}
        {currentPage === 'Basic Graph' && <BasicGraphScreen />}
        {currentPage === 'Rainfall Statistics' && <SegmentedGraphScreen />}
        {!['Home', 'Profile', 'Basic Graph', 'Rainfall Statistics'].includes(currentPage) && (
          <Typography paragraph>Select a page from the menu</Typography>
        )}
      </Main>
    </Box>
  );
}
