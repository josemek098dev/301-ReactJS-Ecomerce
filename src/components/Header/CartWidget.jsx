import { Badge } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartWidget = () => {
    return (
        <>
            <Badge badgeContent={4} sx={{
                "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "#393a49",
                   
                }}
            } >
                <ShoppingCartOutlinedIcon sx={{ ml: 2, color: '#393a49' }} style={{ fontSize: 25 }} />
            </Badge >
        </>
    )
}
