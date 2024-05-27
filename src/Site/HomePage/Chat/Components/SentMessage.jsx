import * as React from 'react';
import { Card, Box, Grid, Typography, CardHeader } from '@mui/material';

const SentMessage = ({ message, refus }) => {
    return (
        <Box ref={refus} sx={{ width: '100%' }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="baseline"
                spacing={1}
                wrap="nowrap">
                <Grid item >
                    <Card variant="elevation" sx={{ ml: 10, border: 1, borderRadius: 4, borderBottomRightRadius: 0, backgroundColor: '#90caf92e', borderColor: '#90caf9' }}>
                        <CardHeader
                            sx={{p: 1, py: 0.5, textAlign: 'right'}}
                            subheader={message.component}                         
                            
                        />
                        {/* <Box sx={{ p: 1 }} textAlign='right' >
                            {message.component}
                        </Box> */}
                    </Card>
                    <Typography color="text.secondary" variant="body2" fontSize="11px" textAlign="right" >
                        {message.content.time}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SentMessage;