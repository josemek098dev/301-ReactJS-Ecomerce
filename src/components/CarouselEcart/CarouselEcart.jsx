import Carousel from 'react-bootstrap/Carousel';


export const CarouselEcart = () => {



  return (
    <div style={{ backgroundColor: '#F8F8F8', textAlign: 'center', marginTop:'20px'}}>
      <Carousel controls={false} id="CarEcart">

        <Carousel.Item>
          <div style={{ background: '#F0E1F3', padding: '6%', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ margin: '0 auto', fontSize: '3rem', color: '#FF3366' }}>¡Descuentos de verano!</h2>
            <p style={{ margin: '0 auto', fontSize: '1.5rem', color: '#333' }}>Hasta un 50% de descuento en toda la tienda.</p>
            <em style={{ margin: '0 auto', fontSize: '1.2rem', color: '#888' }}>Válido hasta el 31 de agosto. No te lo pierdas.</em>
           
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ background: '#F0D7DB', padding: '6%', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ margin: '0 auto', fontSize: '3rem', color: '#FF6633' }}>¡Nuevos productos en stock!</h2>
            <p style={{ margin: '0 auto', fontSize: '1.5rem', color: '#333' }}>Descubre nuestras últimas novedades.</p>
            <em style={{ margin: '0 auto', fontSize: '1.2rem', color: '#888' }}>Echa un vistazo y encuentra lo que necesitas.</em>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{ background: '#D1E0EE', padding: '6%', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 style={{ margin: '0 auto', fontSize: '3rem', color: '#3366FF' }}>¡Envío gratuito!</h2>
            <p style={{ margin: '0 auto', fontSize: '1.5rem', color: '#333' }}>En todos los pedidos superiores a $50.</p>
            <em style={{ margin: '0 auto', fontSize: '1.2rem', color: '#888' }}>Aprovecha esta oferta por tiempo limitado.</em>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};
