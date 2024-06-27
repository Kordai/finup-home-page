import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, Chip, Divider, Stack } from '@mui/material';
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import monitor from '../../../Img/monitor2.jpg';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import DomainVerificationRoundedIcon from '@mui/icons-material/DomainVerificationRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const ServicesCardPC = ({ }) => {

    return (
        <Card sx={{ boxShadow: 'gray 0px 8px 10px -3px;', borderRadius: 1 }}>

            <CardMedia
                component="img"

                image={monitor}
                alt="Услуги Бухгалтера"
            />
            <CardContent sx={{ textAlign: 'center', p: { xs: 0.5, md: 2 } }}>

                <CardHeader
                    sx={{ p: 0, pb: { xs: 2, md: 2 } }}
                    avatar={
                        <Avatar variant="rounded" sx={{ bgcolor: '#ffe57f', width: 24, height: 24 }} aria-label="recipe" >
                            <MovingRoundedIcon color='secondary' />
                        </Avatar>
                    }

                    title={<Typography variant="h3" sx={{ fontSize: { xs: '1.2rem', sm: '1.7rem' }, fontWeight: { xs: '600', sm: '400' } }} color="text.secondary" textAlign={'left'} >
                        Аутсорсинг Бухгалтерии
                    </Typography>}
                // subheader={<Typography variant="h3" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, display: { xs: 'none', sm: 'block' } }} color="text.secondary" textAlign={'left'} >
                //     {subheader}
                // </Typography>}
                />
                <Stack
                    // divider={<Divider sx={{ backgroundColor: '#fcbb42' }} flexItem />}
                    maxWidth={{ xs: '99%', sm: '80%' }}
                    marginX={'auto'}
                    spacing={1}
                >
                    <Chip icon={<DoneOutlineRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Бухгалтерское обслуживание
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<DoneOutlineRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Постановка бухучёта
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<DoneOutlineRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Восстановление бухучёта
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<DoneOutlineRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Ведение участков бухгалтерии
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<DoneOutlineRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Расчет зарплаты
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<DoneOutlineRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Налоговый учет
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                    <Chip icon={<DoneOutlineRoundedIcon color='secondary' />}
                        label={
                            <Typography variant="body2" textAlign={'left'} sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, ml: 1 }} >
                                Кадровый учет
                            </Typography>
                        }
                        sx={{ borderColor: '#fcbb42' }}
                        variant="outlined" />
                </Stack>

            </CardContent>
        </Card>
    );
}

export default ServicesCardPC;