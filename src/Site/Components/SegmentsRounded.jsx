import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import reg from '../../Img/reg.jpg'
import start from '../../Img/start.jpg'
import tax from '../../Img/tax.jpg'
import user from '../../Img/user.jpg'
import company from '../../Img/company.jpg'
import tovar from '../../Img/tovar.jpg'
import client from '../../Img/client.jpg'
import delivery from '../../Img/delivery.jpg'
import rashody from '../../Img/rashody.jpg'
import dot from '../../Img/dot.jpg'
import wages from '../../Img/wages.jpg'
import chat from '../../Img/chat.jpg'
import stat from '../../Img/statistic.jpg'
import new_applications from '../../Img/new_application.jpg'
import { Container, Grid } from '@mui/material';

const SegmentsRounded = ({ title, text, textBold, imgIndex }) => {

    const getIMG = (img) => {
        switch (img) {
            case 0:
                return reg
            case 1:
                return start
            case 2:
                return user
            case 3:
                return company

            case 4:
                return tovar

            case 5:
                return client

            case 6:
                return delivery

            case 7:
                return rashody

            case 8:
                return dot

            case 10:
                return new_applications

            case 11:
                return chat

            case 12:
                return wages

            case 14:
                return stat

            default:
                return tax
        }
    }

    return (
        <Container id={imgIndex} maxWidth="xl" sx={{ mt: 1, p: { xs: 'default', md: 0 } }}>
            <Grid container spacing={5} sx={{ justifyContent: 'center', pb: 3 }}>
                {imgIndex % 2 ? <Grid item md={12} lg={6} sx={{ m: 'auto', display: { xs: 'block', sm: 'none' } }} >
                    <Avatar variant="rounded" alt={title} sx={{ bgcolor: '#ffe57f', width: { xs: '300px', sm: '400px' }, height: { xs: '300px', sm: '400px' }, m: 'auto', borderRadius: 3 }} src={getIMG(imgIndex)} />
                </Grid> : <Grid item md={12} lg={6} sx={{ m: 'auto' }} >
                    <Avatar variant="rounded" alt={title} sx={{ bgcolor: '#ffe57f', width: { xs: '300px', sm: '400px' }, height: { xs: '300px', sm: '400px' }, m: 'auto', borderRadius: 3 }} src={getIMG(imgIndex)} />
                </Grid>}
                <Grid item md={12} lg={6}  >
                    <Typography variant="h3" sx={{ fontSize: { xs: '1.2rem', sm: '1.7rem' }, fontWeight: 700, pb: { xs: 2, sm: 3 } }} color="text.secondary" textAlign={'center'} >
                        {title}
                    </Typography>
                    {text.map((t, index) => (index + 1) === text.length || (index) === 1 ?
                        <Typography key={index} variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, maxWidth: { xs: '95%', sm: '85%' }, mx: 'auto', textIndent: '5%', mt: 2 }} color="text.secondary" textAlign={'left'} >
                            <strong>{textBold[index]}</strong>{t}
                        </Typography> :
                        <Typography key={index} variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, maxWidth: { xs: '95%', sm: '85%' }, mx: 'auto', textIndent: '5%' }} color="text.secondary" textAlign={'left'} >
                            <strong>{textBold[index]}</strong>{t}
                        </Typography>
                    )}
                </Grid>
                {imgIndex % 2 ? <Grid item md={12} lg={6} sx={{ m: 'auto', display: { xs: 'none', sm: 'block' } }} >
                    <Avatar variant="rounded" alt={title} sx={{ bgcolor: '#ffe57f', width: { xs: '300px', sm: '400px' }, height: { xs: '300px', sm: '400px' }, m: 'auto', borderRadius: 3 }} src={getIMG(imgIndex)} />
                </Grid> : <></>}
            </Grid>
        </Container>
    );
}

export default SegmentsRounded;