import { Avatar, Card, CardHeader, Typography } from '@mui/material';
import * as React from 'react';
import logo from '../../../Img/logo_clipbord.png'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

const InfoCard = ({ title, captions, cardColor, logoCard }) => {
    const logoCardImg = [<DevicesOutlinedIcon sx={{ width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 }, color: cardColor}} />, <DescriptionOutlinedIcon sx={{ width: 40, height: 40, color: cardColor}} />, <AssignmentOutlinedIcon sx={{ width: 40, height: 40, color: cardColor}} />, <CalculateOutlinedIcon sx={{ width: 40, height: 40, color: cardColor}} />]
    return (
        <Card sx={{ backgroundColor: cardColor, p: { xs: 1.5, md: 2 }, borderRadius: 3, position: 'relative' }}>
            <CardHeader
                sx={{ p: 0 }}
                avatar={
                    <Avatar sx={{backgroundColor: '#ffffff85', width: { xs: 44, md: 56 }, height: { xs: 44, md: 56 }, borderRadius: 2.5}} aria-label="recipe" variant="rounded">
                      {logoCardImg[logoCard]}
                    </Avatar>
                  }
                title={<>
                    <Typography align='left' variant='h2' component="h2" sx={{ fontSize: { xs: '0.8em', md: '1.3em' }}} textAlign={'right'} > {title} </Typography>
                    <Typography align='left' variant='h3' component="h3" sx={{ fontWeight: '600', fontSize: { xs: '0.8em', md: '1.5em' } }}  textAlign={'right'} > {captions}<span><img src={logo} alt="logo" style={{ position: 'absolute', width: '150px', opacity: '0.12', right: '90px', top: '-25px' }} />  </span> </Typography>

                </>}
                // subheader={<>
                //     <Typography variant="caption" align='left' display="block" gutterBottom> <span style={{ fontWeight: '600', color: 'green', fontSize: '14px' }} >+20%</span> С прошлого месяца </Typography>
                // </>}

            />
        </Card>
    )
}

export default InfoCard