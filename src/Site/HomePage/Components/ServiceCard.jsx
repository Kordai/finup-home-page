import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AodRoundedIcon from '@mui/icons-material/AodRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';

const ServiceCard = ({ logo, title, subheader, text1, text2, btnName, fun }) => {

    const getAccountColor = (account) => {
        switch (account) {
            case 1:
                return '#90caf9';

            case 2:
                return '#ffe57f';

            case 3:
                return '#b39ddb';

            case 4:
                return '#2e7d3291';

            default:
                return '#90caf9';
        }
    }

    const getCardLogo = (logo) => {
        switch (logo) {
            case 1:
                return <AodRoundedIcon />;

            case 3:
                return <AssignmentIndRoundedIcon />;

            case 2:
                return <AddchartRoundedIcon />;

            case 4:
                return <AssignmentRoundedIcon />;

            default:
                return <></>;
        }
    }

    return (
        <Grid item xs={6} md={6} sm={6} lg={4} xl={3} >
            <Card sx={{ width: { xs: 140, sm: 350 }, height: { xs: 110, sm: 190 }, boxShadow: 'gray 0px 8px 10px -3px;', border: 4, borderColor: getAccountColor(logo), borderRadius: 3 }}>
                <CardActionArea onClick={fun} >
                    <CardHeader
                        sx={{ p: { xs: 0.5, md: 2 } }}
                        avatar={
                            <Avatar variant="rounded" sx={{ bgcolor: '#07139e', width: 24, height: 24 }} aria-label="recipe" >
                                {getCardLogo(logo)}
                            </Avatar>
                        }

                        title={<Typography variant="h2" sx={{ fontSize: { xs: '0.8rem', sm: '2rem' }, fontWeight: { xs: '600', sm: '400' } }} color="text.secondary" textAlign={'left'} >
                            {title}
                        </Typography>}
                        subheader={<Typography variant="h3" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, display: { xs: 'none', sm: 'block' } }} color="text.secondary" textAlign={'left'} >
                            {subheader}
                        </Typography>}
                    />
                    <CardContent sx={{ textAlign: 'center', p: { xs: 0.5, md: 2 } }}>
                        <Typography variant="body2" color="text.secondary" textAlign={'left'} sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, display: { xs: 'none', sm: 'block' } }} >
                            {text1}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign={'left'} sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, display: { xs: 'block', sm: 'none' } }} >
                            {subheader + ' ' + text2}
                        </Typography>

                        <Typography color="text.secondary" sx={{color: '#07139e', mt: 1, fontSize: { xs: '14px', sm: '18px' }}} variant="h5" textAlign='center' >
                            {btnName}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ServiceCard;