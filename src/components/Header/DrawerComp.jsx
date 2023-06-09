import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Button } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const DrawerComp = ({ pag }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem >
            <ListItemIcon style={{ justifyContent: 'flex-start' }}>
              <ArrowBackIosIcon sx={{ fontSize: 13 }} />
            </ListItemIcon>
            <ListItemText>
              <Button
              
                onClick={console.warn('Not Implemented yet...')}
                sx={{ my: 0, color: 'black', display: 'block' }}
              >
                Categorias
              </Button>
            </ListItemText>
          </ListItem>
          {pag.map((page) => (
            <ListItem key={page}>
              <ListItemIcon style={{ justifyContent: 'flex-start' }}>
                <ArrowBackIosIcon sx={{ fontSize: 13 }} />
              </ListItemIcon>
              <ListItemText>
                <Button
                  key={page}
                  onClick={console.warn('Not Implemented yet...')}
                  sx={{ my: 0, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};
