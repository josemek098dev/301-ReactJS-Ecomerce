// App bar with responsive menu from mui.com

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { CartWidget } from './CartWidget';
import { SearchComp } from './SearchComp';
import { NavBar } from './NavBar';

export const Header = () => {

    return (
        <AppBar elevation={0} sx={{ background: '#ffff', marginTop: '10px' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavBar />
                    <SearchComp />
                    <CartWidget />
                </Toolbar>
            </Container>

        </AppBar>
    );
}