import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export const Logo = () => {
    return (
        <>
       
            <Typography
                variant="h5"
                noWrap
                component="a"
            
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'Public Sans',
                    fontWeight: 600,
                    fontSize: '2.5rem',
                    letterSpacing: '.3rem',
                    color: '#3cbaba',
                    textDecoration: 'none',
                   
                }}
            >
                <Link to='/' className='LinkHome'>
                E-<span style={{ color: '#393a49', fontSize: '1.8rem', marginTop: '10px' }}>CART</span></Link>
            </Typography>

            <Typography
                variant="h6"
                noWrap
                component="a"
               
                sx={{
                    mr: 3,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Public Sans',
                    fontWeight: 600,
                    letterSpacing: '.2rem',
                    color: '#3cbaba',
                    textDecoration: 'none',
                    fontSize: '2.5rem',
                                    
                    
                }}
            > <Link to='/'className='LinkHome'>
               E-<span style={{ color: '#393a49', fontSize: '1.8rem', marginTop: '12px' }}>CART</span></Link>
            </Typography>
        </>
    );
};
