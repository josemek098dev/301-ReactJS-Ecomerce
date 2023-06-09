

import { DealsCard } from './DealsCard';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const DealsContainer = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 6
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


      <div style={{margin: "5% 3%" }}>
        <h4 style={{ margin: "2rem 0 ", fontWeight: '600' }}>Ofertas</h4>
        <div style={{ textAlign: "center" }}>
          <Carousel
                  
            responsive={responsive}
          >
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
            <DealsCard />
          </Carousel>
        </div>
      </div>

    </>

  );
};







