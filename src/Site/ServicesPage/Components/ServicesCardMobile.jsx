import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  Button, CardMedia, Chip,  Stack } from '@mui/material';
import AodRoundedIcon from '@mui/icons-material/AodRounded';
import mobile from '../../../Img/mobile2.jpg';
import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded';

const ServicesCardMobile = () => {

    return (
        <Card sx={{ boxShadow: 0, borderRadius: 1 }}>

            <CardMedia
                component="img"

                image={mobile}
                alt="Услуги Бухгалтера"
            />
            <CardContent sx={{ textAlign: 'center', p: { xs: 0.5, md: 2 } }}>

                <CardHeader
                    sx={{ p: 0, pb: { xs: 2, md: 2 } }}
                    // avatar={
                    //     <Avatar variant="rounded" sx={{ bgcolor: '#ffe57f', width: 24, height: 24 }} aria-label="recipe" >
                    //         <AodRoundedIcon color='secondary' />
                    //     </Avatar>
                    // }

                    title={
                        <Chip icon={<AodRoundedIcon sx={{ width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }} color='secondary' />}
                        label={
                            <Typography variant="h5" sx={{ fontSize: { xs: '1.2rem', sm: '1.7rem' }, fontWeight: { xs: '600', sm: '400' } }} color="text.secondary" textAlign={'left'} >
                        Online(Онлайн) Бухгалтер
                    </Typography>
                        }
                        sx={{ borderColor: '#fcbb42', border: 0 }}
                        variant="outlined" />}
                // subheader={<Typography variant="h3" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, display: { xs: 'none', sm: 'block' } }} color="text.secondary" textAlign={'left'} >
                //     {subheader}
                // </Typography>}
                />
                <Stack
                    // divider={<Divider sx={{ backgroundColor: '#fcbb42' }} flexItem />}
                    spacing={0}
                    maxWidth={{ xs: '99%', sm: '60%' }}
                    marginX={'auto'}
                >
                    <Button startIcon={<AppShortcutRoundedIcon color='secondary' />} title='Свобода от Офиса' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                        Свобода от Офиса
                        </Typography>
                    </Button>
                    <Button startIcon={<AppShortcutRoundedIcon color='secondary' />} title='Бухгалтерский учет в Смартфоне' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                        Бухгалтерский учет в Смартфоне
                        </Typography>
                    </Button>
                    <Button startIcon={<AppShortcutRoundedIcon color='secondary' />} title=' Бухгалтерия без Границ' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                        Бухгалтерия без Границ
                        </Typography>
                    </Button>
                    <Button startIcon={<AppShortcutRoundedIcon color='secondary' />} title='Документы за 1 мин.' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                        Документы за 1 мин.
                        </Typography>
                    </Button>
                    <Button startIcon={<AppShortcutRoundedIcon color='secondary' />} title='Доступ к Бухгалтерии 24 ч.' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                        Доступ к Бухгалтерии 24 ч.
                        </Typography>
                    </Button>
                    <Button startIcon={<AppShortcutRoundedIcon color='secondary' />} title='Отправка докуентов в PDF' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                        Отправка докуентов в PDF   
                        </Typography>
                    </Button>
                    <Button startIcon={<AppShortcutRoundedIcon color='secondary' />} title='Эффективность, Безопасность, Скорость ' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                        Эффективность, Безопасность, Скорость 
                        </Typography>
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default ServicesCardMobile;