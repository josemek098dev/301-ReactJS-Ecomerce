import Typography from '@mui/material/Typography';

export const Logo = () => {
    return (
        <>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'Reem Kufi Fun',
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    letterSpacing: '.3rem',
                    color: '#17AEAA',
                    textDecoration: 'none',
                }}
            >
                E-<span style={{ color: 'Black', fontSize: '2.0rem', marginTop: '10px' }} >CART</span>
            </Typography>

            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 3,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Reem Kufi Fun',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: '#17AEAA',
                    textDecoration: 'none',
                    fontSize: '2.5rem',
                    marginTop: '-10px'
                }}
            >
                E-<span style={{ color: 'Black', fontSize: '2.0rem', marginTop: '10px' }} >CART</span>
            </Typography>
        </>
    );
};
