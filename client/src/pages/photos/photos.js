import React from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';

import crewAtSpn from '../../images/crew-at-spn.jpg';
import benandTrish from '../../images/captain-and-trish.jpg';
import captainInJail from '../../images/captain-in-jail.jpg';
import tiffBenJosh from '../../images/tiff-ben-josh.jpg';
class Photos extends React.Component {
    state = {
        show: false,
        imgSrc: ""
    }
    handleClose = () => {
        this.setState({ show: false });
    };
    handleOpen = (e) => {
        this.setState({ show: true });
        let clickedImg = e.target;
        this.setState({ imgSrc: clickedImg.getAttribute("src") });
    };
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6" lg="3">
                        <Image className="cropped mb-3" src={crewAtSpn} fluid onClick={this.handleOpen} />
                    </Col>
                    <Col xs="6" lg="3">
                        <Image className="cropped mb-3" src={benandTrish} fluid onClick={this.handleOpen} />
                    </Col>
                    <Col xs="6" lg="3">
                        <Image className="cropped" src={captainInJail} fluid onClick={this.handleOpen} />
                    </Col>
                    <Col xs="6" lg="3">
                        <Image className="cropped" src={tiffBenJosh} fluid onClick={this.handleOpen} />
                    </Col>
                </Row>
                <Modal show={this.state.show} size="lg" centered onHide={this.handleClose}>
                    <Modal.Header className="styled-modal-header" closeButton></Modal.Header>
                    <Modal.Body className="styled-modal">
                        <Image src={this.state.imgSrc} fluid />
                    </Modal.Body>
                </Modal>
            </Container>
        );
    }
}

export default Photos;