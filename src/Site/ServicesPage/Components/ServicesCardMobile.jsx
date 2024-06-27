import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {  CardMedia, Chip,  Stack } from '@mui/material';
import AodRoundedIcon from '@mui/icons-material/AodRounded';
import mobile from '../../../Img/mobile2.jpg';
import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded';

const ServicesCardMobile = ({ }) => {

    return (
        <Card sx={{ boxShadow: 'gray 0px 8px 10px -3px;', borderRadius: 1 }}>

            <CardMedia
                component="img"

                image={mobile}
                alt="Услуги Бухгалтера"
            />
            <CardContent sx={{ textAlign: 'center', p: { xs: 0.5, md: 2 } }}>

                <CardHeader
                    sx={{ p: 0, pb: { xs: 2, md: 2 } }}
                    avatar={
                        <Avatar variant="rounded" sx={{ bgcolor: '#ffe57f', width: 24, height: 24 }} aria-label="recipe" >
                            <AodRoundedIcon color='secondary' />
                        </Avatar>
                    }

                    title={<Typography variant="h3" sx={{ fontSize: { xs: '1.2rem', sm: '1.7rem' }, fontWeight: { xs: '600', sm: '400' } }} color="text.secondary" textAlign={'left'} >
                        Online(Онлайн) Бухгалтер
                    </Typography>}
                // subheader={<Typography variant="h3" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, display: { xs: 'none', sm: 'block' } }} color="text.secondary" textAlign={'left'} >
                //     {subheader}
                // </Typography>}
                />
                <Stack
                    // divider={<Divider sx={{ backgroundColor: '#fcbb42' }} flexItem />}
                    spacing={1}
                    maxWidth={{ xs: '99%', sm: '80%' }}
                    marginX={'auto'}
                >
                    <Chip icon={<AppShortcutRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1  }} >
                                Свобода от Офиса
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<AppShortcutRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1  }} >
                                Бухгалтерский учет в Смартфоне
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<AppShortcutRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1  }} >
                                Бухгалтерия без Границ
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<AppShortcutRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1  }} >
                                Документы за 1 мин.
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<AppShortcutRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1  }} >
                                Доступ к Бухгалтерии 24 ч.
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<AppShortcutRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Отправка докуентов в PDF    
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                        <Chip icon={<AppShortcutRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Эффективность, Безопасность, Скорость    
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                </Stack>

            </CardContent>
        </Card>
    );
}

export default ServicesCardMobile;