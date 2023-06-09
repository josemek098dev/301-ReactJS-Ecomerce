import { useProducts } from "../../hook/useProducts";
import { useParams } from "react-router-dom";
import { ItemCard } from "../ItemListContainer/ItemCard";

export const ItemDetailContainer = () => {

    let { id } = useParams();



    const products = useProducts();




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
            }}>Detail by Id</h2>
            <div style={{ display: 'flex' }}>
                {products[id] ? <ItemCard img={products[id].image} title={products[id].title} price={products[id].price} key={products[id].id} /> : ''}
                <div style={{ width:'40%', margin: '10% 2%' }}>
                {products[id] ? <p style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                    }}>
                        {products[id].description}
                    </p>:''}

                </div>
            </div>
        </div>
    )
}
