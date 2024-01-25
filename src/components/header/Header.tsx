import React from 'react';

import { AppBar, Button, Toolbar, Container, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import style from './Header.module.scss'




function Header() {
  return (
    <AppBar position='fixed'>
        <Container fixed>
            <Toolbar sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div className={style.navContainer}>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={style.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={style.title}>
                        MistMouse Production
                    </Typography>
                </div>
                <div className={style.navContainer}>
                    <Box mr={3}>
                        <Button color="inherit" variant='outlined'>Log In</Button>
                    </Box>
                    <Button color="secondary" variant='contained'>Sign Up</Button>
                </div>

            </Toolbar>
        </Container>
    </AppBar>
  );
}

export default Header;
