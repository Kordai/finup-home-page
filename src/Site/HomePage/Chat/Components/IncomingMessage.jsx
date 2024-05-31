import React from 'react';
import { Card, Box, Typography, Grid } from '@mui/material';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';

const IncomingMessage = ({ message, refus }) => {
        
    return (
        <Box ref={refus} sx={{ width: '100%' }}>
            <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
                spacing={0}
                wrap="nowrap">
                <Grid item>
                    <SmartToyRoundedIcon color='secondary' />
                </Grid>
                <Grid item>
                    <Card variant="elevation" sx={{ mr: 10, border: 1, p: 1, borderRadius: 4, borderTopLeftRadius: 0, backgroundColor: '#ffe57f45', borderColor: '#ffe57f' }} >
                        <Box textAlign='left'>                         
                            {message.component}
                        </Box>
                    </Card>
                    <Typography color="text.secondary" variant="body2" fontSize="11px" textAlign="left" >
                        {message.time}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default IncomingMessage;