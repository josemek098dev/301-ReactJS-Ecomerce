import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Button } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
Button
export const DrawerComp = ({ pag }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pag.map((page) => (
            <ListItem key={page}>
              <ListItemText>
                <Button
                  key={page}
                  onClick={console.warn('Not Implemented yet...')}
                  sx={{ my: 0, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              </ListItemText>
              <ListItemIcon style={{ justifyContent: 'flex-end' }} >
                <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
              </ListItemIcon>
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
