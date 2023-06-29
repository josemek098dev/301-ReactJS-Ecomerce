
import { AllItemCard } from './AllItemCard'
import { Container, Row, Spinner } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import './AllItemCard.css'
import 'animate.css'
import { useEffect, useState } from 'react';


export const AllItemsContainer = ({ isLoading, playersData }) => {

   

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [imgLoad, setImgLoad] = useState(false)

    const loadState = (state) => {
        setImgLoad(state)
    }


    const RenderPlayers = ({ isLoading, playersData }) => {
        if (!imgLoad  && isLoading) {
            return <div className='w-100 vh-100 d-flex justify-content-center mt-5'><Spinner /></div>;
        }

        return (
            <Row>
                {playersData.map((data) => (      
                    <AllItemCard data = { data } key = { data.id } loadState = { loadState } />                    
                ))}
            </Row>
        );
    };

    return (
        <div className='d-flex justify-content-center mt-4 mb-5'>
            <Container>
                <Row>
                    <Col xs={12} sm={3} className="d-none d-sm-block d-lg-block">
                        <div className="bg-danger"> aaaaaaaaa</div>
                    </Col>

                    <Col xs={12} sm={12} md={8}>
                        <h5>All - Rank by Recommended</h5>
                        <RenderPlayers isLoading={isLoading} playersData={playersData} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
