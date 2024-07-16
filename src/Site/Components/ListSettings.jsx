import { List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import * as React from 'react';

const ListSettings = ({listItem}) => {

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mx: 'auto' }}>
      {listItem.map((value, index) => {        
        return (
          <ListItem
            key={value.title}           
            disablePadding
          >
            <ListItemButton onClick={()=> value.ref.current.scrollIntoView() }>
              <ListItemAvatar>
                {index + 1}
              </ListItemAvatar>
              <ListItemText primary={value.title} sx={{fontStyle: 'italic', fontSize: '1.1rem', color: '#07139e'}} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    )
}

export default ListSettings