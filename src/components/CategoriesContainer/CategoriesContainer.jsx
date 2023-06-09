import { CategoriesCard } from './CategoriesCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
export const CategoriesContainer = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1400, min: 1200 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 4
    },
    tablet1: {
      breakpoint: { max: 900, min: 550 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 2
    }
  };

  return (
    <>
      <div style={{ margin: "5% 3%" }}>
        <h4 style={{ margin: "2rem 0 ", fontWeight: '600' }}>Categorias destacadas</h4>

        <Box
          sx={{
            padding: { xs: "1% 3%", md: "1% 10%", xl: "1% 20%" },
            maxWidth: { md: 1920 }, // Establecer el ancho máximo en 1080px en pantallas más grandes que "md" (1080px)
            margin: "0 auto", // Centrar el contenido horizontalmente
            background:'#EFFEFF'
          }}
        >
          <Carousel responsive={responsive}>
            <CategoriesCard  />
            <CategoriesCard  />
            <CategoriesCard  />
            <CategoriesCard  />
            <CategoriesCard  />
          </Carousel>
        </Box>

      </div>
    </>
  );
};
