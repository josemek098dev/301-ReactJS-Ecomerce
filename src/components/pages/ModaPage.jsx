


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useProducts } from "../../hook/useProducts";
import { Link } from "react-router-dom";
import { ItemCard } from "../ItemListContainer/ItemCard";

export const ModaPage = () => {

  const products = useProducts("https://fakestoreapi.com/products/category/men's%20clothing");
  console.log(products)

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
    <div >
      <h2 style={{
        fontSize: '1.8rem',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        margin: '0 20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
      }}>Moda</h2>

      <div style={{ margin: "5% 3%" }}>
       
        <div style={{ textAlign: "center" }}>
          <Carousel responsive={responsive}>
            {products.map((prod) => (
              <Link key={prod.id-1} to={`/item/${prod.id-1}`} className="Link"><ItemCard img={prod.image} title={prod.title} price={prod.price} key={prod.id} /></Link>
            ))}
          </Carousel>
        </div>
      </div>

    </div>
  )
}



