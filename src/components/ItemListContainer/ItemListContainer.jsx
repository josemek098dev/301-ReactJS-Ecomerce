import { ItemCard } from "./ItemCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useProducts } from "../../hook/useProducts";
import { Link } from "react-router-dom";


export const ItemListContainer = () => {

  const products = useProducts();


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1400, min: 1200 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 3
    },
    tablet1: {
      breakpoint: { max: 900, min: 550 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div style={{ margin: "5% 3%" }}>
        <h4 style={{ margin: "2rem 0 ", fontWeight: '600' }}>Lo más visitado</h4>
        <div style={{ textAlign: "center" }}>
          <Carousel responsive={responsive}>
            {products.map((prod) => (
            <Link key={prod.id-1} to={`/item/${prod.id-1}`} className="Link"><ItemCard img={prod.image} title={prod.title} price={prod.price}key={prod.id} /></Link>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};




