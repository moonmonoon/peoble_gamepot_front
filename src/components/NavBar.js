import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from '@mui/material';
import { Lock, Menu } from '@mui/icons-material';
import { useValue } from '../context/ContextProvider';
import UserIcons from './user/UserIcons';
import Sidebar from './sidebar/Sidebar';
import Logo from "../assets/logo.png";

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const NavBar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar style={{backgroundColor: '#2228B2'}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => setIsOpen(true)}
              >
                <Menu />
              </IconButton>
            </Box>
            <Box
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <img src={Logo} width='25%' height='10%'></img>
            </Box>
            
            {!currentUser ? (
              <Button
                color="inherit"
                startIcon={<Lock />}
                onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
              >
                Login
              </Button>
            ) : (
              <UserIcons />
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Sidebar {...{ isOpen, setIsOpen }} />
    </>
  );
};

export default NavBar;
