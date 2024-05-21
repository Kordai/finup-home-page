import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Box } from '@mui/material';

const BottomBar = () => {

  const focusRef = React.useRef(null);

  const sendBtn = () => {
    const inp = focusRef.current
    //newMessage(inp.value)
    focusRef.current.focus()
    inp.value = ''
    window.scroll(0, window.screen.height);
  }

  const pressKey = (e) => {
    if (e.keyCode === 13) {
      sendBtn()
    }
  }

  return (
    <AppBar component="div" position="sticky" sx={{ backgroundColor: '#fff', top: 'auto', bottom: 0, boxShadow: 0, width: '100%', borderRadius: 5 }}>
      <Toolbar sx={{ p: 0, mx: 0.5, pl: 1, pr: 1 }} >
        <Box
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', border: 1, borderColor: '#fcbb42', boxShadow: 0, borderRadius: 2 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Введите сообщение"
            inputProps={{ 'aria-label': 'search' }}
            inputRef={focusRef}
            onKeyDown={pressKey}
          />
          <IconButton type="button" onClick={sendBtn} sx={{ p: '10px' }}>
            <SendRoundedIcon color='primary' />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default BottomBar;
