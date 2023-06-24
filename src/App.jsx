
import { Header } from "./components/Header/Header";
import './App.css';
import { Footer } from "./components/Footer/Footer";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { ErrorPage } from "./pages/ErrorPage";

import { ByCategoryItemContainerPage } from "./pages/CategoryPage";

export const App = () => {
  return (
    <Box
      sx={{
     
        margin: "0 auto", // Centrar el contenido horizontalmente
      }}
    >
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<HomePage />} />          
          <Route
              path="/category/:position"
              element={<ByCategoryItemContainerPage />}
            />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
};
