import "./Footer.css";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


// Importa los iconos de marcas que desees utilizar en tu footer


export const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="site-footer">
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>Acerca de nosotros</h6>
                            <p className="text-justify">En nuestra plataforma de comercio electrónico, nos dedicamos a brindar a nuestros usuarios una experiencia de compra en línea excepcional. Somos una plataforma de compras líder, diseñada para satisfacer todas tus necesidades comerciales. Con un amplio catálogo de productos de diversas categorías, ofrecemos una amplia gama de artículos, desde electrónica y moda hasta hogar y deportes.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="">Ayuda</a></li>
                                <li><a href="">Comprar</a></li>
                                <li><a href="">Vender</a></li>
                                <li><a href="">Resolucion de problemas</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="">Ayuda</a></li>
                                <li><a href="">Contactanos</a></li>
                                <li><a href="">Contribuye</a></li>
                                <li><a href="">Mas informacion</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">
                                Copyright &copy; 2023 All Rights Reserved by{' '}
                                <a href="#">E-CART</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><Facebook /></a></li>
                                <li><a className="twitter" href="#"><Twitter /></a></li>
                                <li><a className="dribbble" href="#"><Instagram /></a></li>
                                <li><a className="linkedin" href="#"><LinkedIn /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
};
