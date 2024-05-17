import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import logo from '../Img/finup_logo_.png';
// import logo1 from '../Img/logo.png';
import logo2 from '../../Img/logo512.png';
import { Button, Divider, MenuList, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

const pages = ['Главная', 'Услуги', 'Online Бухгалтер', 'Цены', 'Контакты'];

function AppBarSite() {


    //const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const open = Boolean(anchorElUser);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseExitMenu = () => {
        setAnchorElUser(null);
    };

    // const handleExitUser = () => {        
    //     localStorage.clear("finupkzuser")
    //     setAnchorElUser(null)
    //     navigate("/")
    //     window.location.reload()
    // };

    const [settings, setSettings] = useState([
        { title: 'Пользователь', onClick: () => { } },
        { title: 'Компания', onClick: () => { } },
        { title: 'Справочники', onClick: () => { } },
        { title: 'Налоги-зарплата ИП', onClick: () => { } },
        { title: 'Налоговые формы', onClick: () => { } },
        // { title: 'Платежи', onClick: handleOpenFormPayments }, 
        { title: 'Выход', onClick: () => { } }
    ])


    return (
        <AppBar position="fixed" sx={{backgroundColor: 'white'}} top="0">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <img style={{ height: "45px" }} alt="complex" src={logo} /> */}
                    {/* <Avatar src={logo1} sx={{ width: 56, height: 56 }} variant="rounded"/> */}
                    <a href='/' style={{ textDecoration: 'none' }} >
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Avatar src={logo2} sx={{ width: 56, height: 56 }} variant="rounded" />

                            <Typography
                                variant="h6"
                                noWrap
                                color='secondary'
                                sx={{
                                    ml: 1,

                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    lineHeight: '1.3',
                                    fontSize: '2rem',
                                }}
                            >
                                FinUP.kz
                            </Typography>
                        </Stack>
                    </a>
                    <Box sx={{ ml: 10, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                color='secondary'
                                sx={{ display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' }, textAlign: "right" }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <MenuRoundedIcon fontSize="large" color='secondary'  />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleCloseExitMenu}
                        >
                            <MenuList dense>
                                {settings.map((setting, index) => (
                                    <div key={setting.title}>
                                        <MenuItem key={setting.title} onClick={setting.onClick}>
                                            <Typography textAlign="center" >{setting.title}</Typography>
                                        </MenuItem>
                                        {(setting === "Выход") ? "" : <Divider sx={{ borderColor: '#fcbb42' }} variant="middle" component="li" />}
                                    </div>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'block', textAlign: "right", width: 0 }}>
                        <Tooltip title="Личный кабинет">
                            <IconButton  sx={{ p: 0 }}>
                                <AccountBoxRoundedIcon fontSize="large" color='secondary' />
                                <Typography
                                variant="h6"
                                noWrap
                                color='secondary'
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    ml: 1,                                    
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    textDecoration: 'none',
                                    lineHeight: '1.3',
                                    fontSize: '0.8rem',
                                }}
                            >
                                Личный кабинет
                            </Typography>
                            </IconButton>
                        </Tooltip>
                        {/* <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleCloseExitMenu}
                        >
                            <MenuList dense>
                                {settings.map((setting, index) => (
                                    <div key={setting.title}>
                                        <MenuItem key={setting.title} onClick={setting.onClick}>
                                            <Typography textAlign="center" >{setting.title}</Typography>
                                        </MenuItem>
                                        {(setting === "Выход") ? "" : <Divider sx={{ borderColor: '#fcbb42' }} variant="middle" component="li" />}
                                    </div>
                                ))}
                            </MenuList>
                        </Menu> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarSite;