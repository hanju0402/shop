import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data.js";
import Card from "./component/Card";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from "./routes/Detail.js";

function App() {
    let [shoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className="App">

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={() => { navigate('/') }}>혜진.SHOP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<><div className="main-bg"></div>
                    <Card shoes={shoes} /></>} />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<About />} />
                    <Route path="location" element={<About />} />
                </Route>
                <Route path="/event" element={<Event/>}>
                    <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
                    <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
                    <Route></Route>
                </Route>


                <Route path="*" element={<div>없는페이지</div>} />
            </Routes>

        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    )
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    )
}

export default App;
