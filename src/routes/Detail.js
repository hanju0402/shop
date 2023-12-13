import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addProduct } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export default function Detail(props) {
    let [isShow, setIsShow] = useState(true);
    let [inputBox, setInputBox] = useState("");
    let [isShowWar, setIsShowWar] = useState(false);
    let [tapNo, setTapNo] = useState(0);
    
    let dispatch = useDispatch();

    useEffect(() => {
        let timer = setTimeout(() => {
            setIsShow(false);
        }, 2000);
        console.log(2);
        return () => {
            //기존타이머(데이터 요청)는 제거해주세요~~
            console.log(1);
            clearTimeout(timer);
        };
    });

    useEffect(() => {
        if (isNaN(inputBox)) {
            // 숫자외 문자가있음
            alert("그러지마세요");
            setIsShowWar(true);
        } else {
            // 숫자만있음
            setIsShowWar(false);
        }
    }, [inputBox]);

    let [count, setCount] = useState(0);

    let { id } = useParams();
    let shoesInfo = props.shoes.find((x) => x.id === Number(id));

    function chngeEvent(event) {
        setInputBox(event.target.value);
    }

    if (!shoesInfo) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>상품을 찾을 수 없습니다.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            {isShow && <div className="alert alert-warning">2초이내 구매시 할인</div>}
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + `/img/shoes${id}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    {isShowWar && <div className="warning">경고: 숫자만입력하세요</div>}
                    <input onChange={chngeEvent}></input>
                    <h4 className="pt-5">{shoesInfo.title}</h4>
                    <p>{shoesInfo.content}</p>
                    <p>{shoesInfo.price}</p>
                    <button className="btn btn-danger" onClick={() => dispatch(addProduct({name: shoesInfo.title, count: 1}))}>주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        setTapNo(0);
                    }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        setTapNo(1);
                    }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        setTapNo(2);
                    }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabCmponent index={tapNo}/>
        </div>
    );
}

function TabCmponent({index}) {
    return([<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][index])
}
