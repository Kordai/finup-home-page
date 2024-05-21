import React from 'react';
import { Card, Box, Typography, Grid } from '@mui/material';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import { useEffect } from 'react';

const IncomingMessage = ({ message, refus, setStatus }) => {
    useEffect(()=>{
        if (message.status === 0) {
            setTimeout(setStatus(message.id), 3000)
        }
    }, [])
    
    return (
        <Box ref={refus} sx={{ width: '100%' }}>
            <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
                spacing={1}
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
                        {message.content.time}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default IncomingMessage;