import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import Card from "./component/Card";

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
            <Card shoes={shoes} />
        </div>
    );
}

export default App;
