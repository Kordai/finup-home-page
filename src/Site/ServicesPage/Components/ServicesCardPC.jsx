import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button,  CardMedia, Chip, Stack } from '@mui/material';
import MovingRoundedIcon from '@mui/icons-material/MovingRounded';
import monitor from '../../../Img/monitor2.jpg';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

const ServicesCardPC = () => {

    return (
        <Card sx={{ boxShadow: 0, borderRadius: 1 }}>

            <CardMedia
                component="img"

                image={monitor}
                alt="Услуги Бухгалтера"
            />
            <CardContent sx={{ textAlign: 'center', p: { xs: 0.5, md: 2 } }}>

                <CardHeader
                    sx={{ p: 0, pb: { xs: 2, md: 2 } }}

                    title={
                        <Chip icon={<MovingRoundedIcon sx={{ width: { xs: 30, sm: 40 }, height: { xs: 30, sm: 40 } }} color='secondary' />}
                            label={
                                <Typography variant="h5" sx={{ fontSize: { xs: '1.2rem', sm: '1.7rem' }, fontWeight: { xs: '600', sm: '400' } }} color="text.secondary" textAlign={'center'} >
                                    Аутсорсинг Бухгалтерии
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
                    maxWidth={{ xs: '99%', sm: '60%' }}
                    marginX={'auto'}
                    spacing={0}
                >
                    <Button startIcon={<DoneOutlineRoundedIcon color='secondary' />} title='Бухгалтерское обслуживание' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                            Бухгалтерское обслуживание
                        </Typography>
                    </Button>
                    <Button startIcon={<DoneOutlineRoundedIcon color='secondary' />} title='Постановка бухучёта' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                            Постановка бухучёта
                        </Typography>
                    </Button>
                    <Button startIcon={<DoneOutlineRoundedIcon color='secondary' />} title='Восстановление бухучёта' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                            Восстановление бухучёта
                        </Typography>
                    </Button>
                    <Button startIcon={<DoneOutlineRoundedIcon color='secondary' />} title='Ведение участков бухгалтерии' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                            Ведение участков бухгалтерии
                        </Typography>
                    </Button>
                    <Button startIcon={<DoneOutlineRoundedIcon color='secondary' />} title='Расчет зарплаты' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                            Расчет зарплаты
                        </Typography>
                    </Button>
                    <Button startIcon={<DoneOutlineRoundedIcon color='secondary' />} title='Налоговый учет' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                            Налоговый учет
                        </Typography>
                    </Button>
                    <Button startIcon={<DoneOutlineRoundedIcon color='secondary' />} title='Кадровый учет' >
                        <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }} color="text.secondary" textAlign={'left'} >
                            Кадровый учет
                        </Typography>
                    </Button>
                </Stack>

            </CardContent>
        </Card>
    );
}

export default ServicesCardPC;