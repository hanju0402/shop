import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import data from "./data.js";
import Card from "./component/Card";
import axios from "axios";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart";
import RecentList from "./component/RecentList";
import MainBoard from "./component/MainBoard";

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    let [urlCount, setUrlCount] = useState(2);
    let [isMoreShoes, setIsMoreShoes] = useState(true);
    let [apiData, setApiData] = useState([]); // 상태 변수명을 변경

    useEffect(() => {
        let watchValue = localStorage.getItem("watched");

        if (!watchValue) {
            localStorage.setItem("watched", JSON.stringify([]));
        }
    }, []);

    useEffect(() => {
        if (Number(urlCount) > 3) {
            setIsMoreShoes(false);
            console.log(urlCount);
        }
    }, [urlCount]);

    useEffect(() => {
        // 초기 데이터를 가져와서 사용하거나, 필요한 경우 data 변수를 미리 선언해 두세요.
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3002/api/user");
                setApiData(response.data);
                console.log(apiData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        한주.SHOP
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/about");
                            }}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/cart");
                            }}
                        >
                            Cart
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {apiData.length > 0 && apiData[0].NAME}
                            <button onClick={()=> {
                                localStorage.removeItem('watched');
                            }}>스토리지 초기화</button>
                            <MainBoard/>
                            <Card shoes={shoes} />
                            {isMoreShoes && (
                                <button
                                    onClick={() => {
                                        // 로딩중UI 띄우기~
                                        axios
                                            .get(`https://codingapple1.github.io/shop/data${urlCount}.json`)
                                            .then((result) => {
                                                let combine = [...shoes, ...result.data];
                                                setShoes(combine);
                                                setUrlCount(urlCount + 1);
                                                // 로딩중UI 숨기기~
                                            })
                                            .catch(() => {
                                                console.log("실패함");
                                                // 로딩중UI 숨기기~
                                            });
                                    }}
                                >
                                    더보기
                                </button>
                            )}
                        </>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<About />} />
                    <Route path="location" element={<About />} />
                </Route>
                <Route path="/event" element={<Event />}>
                    <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
                    <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
                    <Route></Route>
                </Route>

                <Route path="/cart" element={<Cart />} />

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
    );
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
