import { Badge } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartWidget = () => {
    return (
        <>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon sx={{ ml: 2, color: '#17AEAA' }} style={{ fontSize: 30 }} />
            </Badge>
        </>
    )
}
