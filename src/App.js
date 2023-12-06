import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from './data.js';

function App() {

let [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">HJ.SHOP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="main-bg"></div>

            <Container>
                <Row>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/img/shoes1.jpg"} width="80%" />
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/img/shoes2.jpg"} width="80%" />
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/img/shoes3.jpg"} width="80%" />
                        <h4>상품명</h4>
                        <p>상품설명</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
