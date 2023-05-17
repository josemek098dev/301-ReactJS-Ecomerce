import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DrawerComp } from './DrawerComp';
import { Logo } from './Logo';

export const NavBar = () => {

    const pages = ['Categorias', 'Ofertas', 'Historial', 'Moda'];

    return (
        <>

            {/* Renderiza el componente del menú desplegable en dispositivos móviles */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <DrawerComp pag={pages} />
            </Box>

            <Logo />

            {/* Renderiza los botones de navegación en dispositivos de escritorio */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={console.warn('Not Implemented yet...')}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box></>
    )
}
