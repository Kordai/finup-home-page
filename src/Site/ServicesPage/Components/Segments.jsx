import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import docs from '../../../Img/docs.jpg'
import tax from '../../../Img/tax.jpg'
import reports from '../../../Img/reports.jpg'
import images from '../../../Img/Depositphotos.jpg'
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';

const Segments = ({ title, text, textBold, imgIndex }) => {

    const getIMG = (img) => {        
        switch (img) {
            case 0:
                return docs
            case 1:
                return tax    
            case 2:
                return reports    
            case 3:
                return images    
    
            default:
                return tax
        }
    }

    return (
        <Container maxWidth="xl" sx={{ mt: 1, p: { xs: 'default', md: 0 } }}>
            <Grid container spacing={5} sx={{ justifyContent: 'center',  pb: 3 }}>
                {imgIndex % 2? <Grid item md={12} lg={6} sx={{m: 'auto', display:{xs: 'block', sm: 'none'} }} >
                    <Avatar sx={{ bgcolor: '#ffe57f', width: { xs: '250px', sm: '500px' }, height: { xs: '250px', sm: '500px' }, m: 'auto' }} src={getIMG(imgIndex)} />
                </Grid>:<Grid item md={12} lg={6} sx={{m: 'auto'}} >
                    <Avatar sx={{ bgcolor: '#ffe57f', width: { xs: '250px', sm: '500px' }, height: { xs: '250px', sm: '500px' }, m: 'auto' }} src={getIMG(imgIndex)} />
                </Grid>}
                <Grid item md={12} lg={6}  >
                    <Typography variant="h3" sx={{ fontSize: { xs: '1.2rem', sm: '1.7rem' }, fontWeight: 700, pb: {xs: 2, sm: 3} }} color="text.secondary" textAlign={'center'} >
                        {title}
                    </Typography>
                    {text.map((t, index)=> (index+1)===text.length||(index)===1?
                    <Typography key={index} variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, maxWidth: {xs: '95%', sm: '85%'}, mx: 'auto', textIndent: '5%', mt: 2 }} color="text.secondary" textAlign={'left'} >
                        <strong>{textBold[index]}</strong>{t}
                    </Typography>:
                    <Typography key={index} variant="subtitle1" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, maxWidth: {xs: '95%', sm: '85%'}, mx: 'auto', textIndent: '5%' }} color="text.secondary" textAlign={'left'} >
                        <strong>{textBold[index]}</strong>{t}
                    </Typography>
                    )}
                </Grid>
                {imgIndex % 2? <Grid item md={12} lg={6} sx={{m: 'auto', display:{xs: 'none', sm: 'block'}}} >
                    <Avatar sx={{ bgcolor: '#ffe57f', width: { xs: '250px', sm: '500px' }, height: { xs: '250px', sm: '500px' }, m: 'auto' }} src={getIMG(imgIndex)} />
                </Grid>:<></>}
            </Grid>
        </Container>        
    );
}

export default Segments;