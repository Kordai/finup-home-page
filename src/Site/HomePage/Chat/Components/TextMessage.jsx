import * as React from 'react';
import { Typography } from '@mui/material'

const TextMessage = ({ message }) => {
    return (
        <Typography color="text.secondary" variant="body2" sx={{whiteSpace: "pre-wrap"}} >
            {message}
        </Typography>

    );
}

export default TextMessage;