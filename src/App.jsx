
import { Header } from "./components/Header/Header";
import './App.css';
import { Footer } from "./components/Footer/Footer";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ModaPage } from "./components/pages/ModaPage";
import { TecnologiaPage } from "./components/pages/TecnologiaPage";
import { ErrorPage } from "./components/pages/ErrorPage";
import { OfertasPage } from "./components/pages/OfertasPage";
import { ItemIdPage } from "./components/pages/ItemIdPage";


export const App = () => {
  return (
    <Box
      sx={{
        padding: { xs: "2% 3%", md: "0 10%" },
        maxWidth: { md: 1920 }, // Establecer el ancho máximo en 1080px en pantallas más grandes que "md" (1080px)
        margin: "0 auto", // Centrar el contenido horizontalmente
      }}
    >
      
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<ItemIdPage />} />
          <Route path="/category/ofertas" element={<OfertasPage />} />
          <Route path="/category/tecnologia" element={<TecnologiaPage />} />
          <Route path="/category/moda" element={<ModaPage />} />
          <Route path="*" element={<ErrorPage />} />


        </Routes>
        <Footer />
      </Router>




   

    </Box>
  );
};
