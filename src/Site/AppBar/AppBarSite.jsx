import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import logo from '../Img/finup_logo_.png';
// import logo1 from '../Img/logo.png';
import logo2 from '../../Img/NEW_LOGO_05_2024.png';
import { Button, Divider, MenuList, Stack } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { useNavigate } from 'react-router-dom';

function AppBarSite() {

    const [anchorElOnlineBuh, setAnchorElOnlineBuh] = React.useState(null);
    const openOnlineBuh = Boolean(anchorElOnlineBuh);
    const handleClickOnlineBuh = (event) => {
        setAnchorElOnlineBuh(event.currentTarget);
    };
    const handleCloseOnlineBuh = () => {
        setAnchorElOnlineBuh(null);
    };

    const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const open = Boolean(anchorElUser);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseExitMenu = () => {
        setAnchorElUser(null);
    };

    const settings = [
        { title: 'Главная', onClick: () => { navigate('/'); handleCloseExitMenu() }, idMenu: 'none', idBTN: 'home' },
        { title: 'ИИ Консультант', onClick: () => { navigate('/uslugi_buhgaltera'); handleCloseExitMenu() }, idMenu: 'none', idBTN: 'buh' },
        { title: 'Онлайн Бухгалтер', onClick: handleClickOnlineBuh, idMenu: "menu-onlineBuh", idBTN: 'OnlineBuh' },
        { title: 'Цены', onClick: () => { window.open('https://finup.kz/buh/price/') }, idMenu: 'none', idBTN: 'price' },
        { title: 'Контакты', onClick: () => { window.open('https://finup.kz/buh/about_us/') }, idMenu: 'none', idBTN: 'contact' },
        // { title: 'Платежи', onClick: handleOpenFormPayments }, 
        //{ title: 'Выход', onClick: () => {localStorage.clear(); window.location.reload(true); } }
    ]

    const onlineBuhMNU = [
        { title: 'Обзор сервиса', onClick: () => { navigate('/online_buhgalteriya'); handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        { title: 'Первые настройки', onClick: () => { navigate('/instrukciy_online_buhgalter'); handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        { title: 'Функции', onClick: () => { navigate('/functions_online_buhgalter'); handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        { title: 'Основные разделы', onClick: () => { navigate('/sections_online_buhgalter'); handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        { title: 'Форма 910', onClick: () => { navigate('/forma_910'); handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        { title: 'Форма 913', onClick: () => {  handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        // { title: 'Подпись и печать', onClick: () => { handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        // { title: 'Частые вопросы', onClick: () => { handleCloseExitMenu(); handleCloseOnlineBuh(); } },
        // { title: 'Поддержка', onClick: () => { handleCloseExitMenu(); handleCloseOnlineBuh(); } }, 
    ]

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }} top="0">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <a href='/' style={{ textDecoration: 'none' }} >
                        <Stack alignItems="center" spacing={1}>
                            <img src={logo2} width={'192px'} alt='Онлайн Бухгалтер | Аутсорсинг Бухгалтерии FinUp.kz' />
                        </Stack>
                    </a>
                    <Box sx={{ ml: 10, display: { xs: 'none', md: 'flex' } }}>
                        {settings.map((page) => (
                            <Button
                                key={page.title}
                                onClick={page.onClick}
                                sx={{ display: 'block', color: '#5d5d5d',':hover':{color: '#07139e'} }}
                                id={page.idBTN}
                                aria-controls={openOnlineBuh ? page.idMenu : undefined}
                                aria-haspopup="true"
                                aria-expanded={openOnlineBuh ? 'true' : undefined}
                            >
                                {page.title}
                            </Button>
                        ))}
                        <Menu
                            id="menu-onlineBuh"
                            anchorEl={anchorElOnlineBuh}
                            open={openOnlineBuh}
                            onClose={handleCloseOnlineBuh}
                            MenuListProps={{
                                'aria-labelledby': 'OnlineBuh',
                            }}
                        >
                            {onlineBuhMNU.map((page)=>(
                                <MenuItem sx={{':hover':{color: '#07139e'} }} key={page.title} onClick={page.onClick}>{page.title}</MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' }, textAlign: "right" }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <MenuRoundedIcon fontSize="large" color='secondary' />
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
                                        <MenuItem  sx={{':hover':{color: '#07139e'} }} key={setting.title} onClick={setting.onClick}>
                                            <Typography textAlign="center" >{setting.title}</Typography>
                                        </MenuItem>
                                        {(setting.title === "Контакты") ? "" : <Divider sx={{ borderColor: '#fcbb42' }} variant="middle" component="li" />}
                                    </div>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'block', textAlign: "right", width: 0 }}>
                        <Tooltip title="Личный кабинет">
                            <IconButton sx={{ p: 0 }} onClick={() => window.open('https://cabinet.finup.kz/', '_blank')} >
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