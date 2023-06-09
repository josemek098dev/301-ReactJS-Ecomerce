import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DrawerComp } from './DrawerComp';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const NavBar = () => {

    const pages = ['ofertas', 'tecnologia', 'moda'];

    return (
        <>

            {/* Renderiza el componente del menú desplegable en dispositivos móviles */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Logo />
                <DrawerComp pag={pages} />
            </Box>

            {/* Renderiza los botones de navegación en dispositivos de escritorio */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Logo />

                <Button

                    onClick={console.warn('Not Implemented yet...')}
                    sx={{ my: 1, color: '#393a49', display: 'block', fontFamily: 'Public Sans', marginTop: '25px', fontWeight: '600' }}
                >
                    categorias<KeyboardArrowDownIcon />
                </Button>
                {pages.map((page) => (

                    <Button
                        key={page}
                        onClick={console.warn('Not Implemented yet...')}
                        sx={{ my: 1, color: '#393a49', display: 'block', fontFamily: 'Public Sans', marginTop: '25px', fontWeight: '600' }}
                    >

                        <Link to={`/category/${page}`} className="Link">{page}</Link>
                    </Button>

                ))}
            </Box>

        </>
    )
}
