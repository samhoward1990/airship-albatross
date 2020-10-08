import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import airshipCrew from '../../images/airship-crew.jpg';
class Homepage extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg="12">
                        <h1 className="main-header d-flex justify-content-center">Welcome Steampunks</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Image src={airshipCrew} fluid />
                    </Col>
                    <Col lg="8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod risus a enim consequat porta. Nulla orci orci, vestibulum id mattis in, aliquet semper augue. Sed eros dui, ornare at elit id, vulputate egestas arcu. Etiam est nibh, porttitor sed lorem eget, rhoncus dictum nisi. Suspendisse ut urna est. Etiam dictum tortor dui, sit amet egestas nunc tempor et. Morbi rhoncus, ex a scelerisque auctor, libero nunc iaculis enim, ac vestibulum nibh turpis non diam. Nam ullamcorper neque dolor, ac fringilla dolor eleifend sed. Vestibulum nec scelerisque lectus. Pellentesque finibus massa et fermentum vulputate.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Homepage;