
import { AllItemCard } from './AllItemCard'
import { Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import './AllItemCard.css'
import 'animate.css'


export const AllItemsContainer = ({ isLoading, playersData }) => {


    const RenderPlayers = ({ isLoading, playersData }) => {
        if (isLoading ) {
            return <div className="Spinner">cargando...</div>;
        }

        return (
            <Row>
                {playersData.map((data) => (
                    <AllItemCard data={data} key={data.id} />
                ))}
            </Row>
        );
    };

    return (
        <div className='d-flex justify-content-center mt-4 mb-5'>
            <Container>
                <Row>
                    <Col sm={3} className="d-none d-sm-block d-lg-block">
                        <div className="bg-danger"> aaaaaaaaa</div>
                    </Col>

                    <Col>

                        <RenderPlayers isLoading={isLoading} playersData={playersData} />


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
