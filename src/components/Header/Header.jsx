import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { CartWidget } from './CartWidget';
import { SearchComp } from './SearchComp';
import { NavBar } from './NavBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box } from '@mui/material';

export const Header = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <AppBar position="sticky" elevation={0} sx={{ background: '#ffff', transform: trigger ? 'translateY(-100%)' : 'none', transition: 'transform 0.2s' }}>
            <Toolbar disableGutters>
                <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
                    <NavBar />
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        <SearchComp />
                    </Box>
                    <CartWidget />
                </Container>

            </Toolbar>
            <Box sx={{ display: { xs: 'flex', md: 'none' } , margin: '0 2%'}}>
                <SearchComp />
            </Box>
        </AppBar>
    );
};
