import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './AllItemCard.css'
import 'animate.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";





export const AllItemCard = () => {

    const [playersData, setPlayersData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPlayers = async () => {
            const q = query(collection(db, "playersCollection"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            // console.log('DATA:', querySnapshot);
            querySnapshot.forEach((doc) => {
                // console.log('DATA:', doc.data(), 'ID:', doc.id);
                docs.push({ ...doc.data(), id: doc.id });
            });
            // console.log(docs);
            setPlayersData(docs);
        };
        getPlayers();
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);




    // CODIGO VIEJO

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonClass = isHovered ? 'dark' : 'light';

    const buttonText =
        isHovered
            ?
            <div>
                <ShoppingCartOutlinedIcon sx={{ mb: 0.1, color: '#f8f9fa' }} style={{ fontSize: 20 }} />
                {' $99.99'}
            </div>
            :

            '$999.99';

    const buttonclassName = isHovered ? 'px-4 w-100' : 'px-4';

    const buynow = (<Row className="align-self-end flex-column my-2">
        <Col className="f-14px my-2">Save up to $250 and get 50% on OnePlus Buds Pro 2.</Col>


        <Col>

            <Button
                variant={buttonClass}
                className={buttonclassName}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >{buttonText}</Button>

        </Col>

    </Row >)


console.table(playersData[0])


    return (
        <>

            {isLoading ? (
                <div className="Spinner">
                    cargando...
                </div>
            ) : (
                <div className="PlayersListContainer">
                    {playersData.map((data) => {
                        return (


                            <Link
                                to={`/player-detail/${data.id}`}
                                style={{ textDecoration: "none" }}
                                key={data.id}
                            >
                                
                                <img src={data.img} alt="" />
                                <h1>HOLAA</h1>
                            </Link>



                        );
                    })}
                </div>
            )}


            {/* CodigoVIejo */}

            <Col
                xs={12}
                sm={4}
                md={4}
                className="d-none d-sm-block d-lg-block p-0"

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link
                    to='/category/phones'
                    style={{ textDecoration: "none" }}

                    key=""
                >
                    <Row className="m-2 py-3 px-1">

                        <Col xs={12} md={12} ><img src="/assets/img-prueba.JPG" alt="Imagen de prueba" className="imagen animate__animated animate__flipInY" /></Col>
                        <Col xs={12} md={12} >
                            {buynow}
                        </Col>
                    </Row>
                </Link>
            </Col>


            <Col
                xs={6}
                md={6}
                className="d-block d-sm-none p-0"
            >
                <Row className="bg-custom m-2 py-3 px-1">

                    <Col xs={12} md={6}  ><img src="/assets/img-prueba.JPG" alt="Imagen de prueba" className="imagen" /></Col>
                    <Col xs={12} md={12} >
                        {buynow}
                    </Col>
                </Row>
            </Col>


        </>
    );


};

