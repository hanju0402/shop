import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from 'styled-components'




export default function Detail(props) {

    let [isShow, setIsShow] = useState(true);

    useEffect(() => {
       let timer = setTimeout(() => { setIsShow(false) }, 2000)
        console.log(2)
        return () => {
            //기존타이머(데이터 요청)는 제거해주세요~~
            console.log(1)
            clearTimeout(timer)
        }
    }, )



    let [count, setCount] = useState(0);

    let { id } = useParams();
    let shoesInfo = props.shoes.find((x) => x.id === Number(id));

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
            {isShow &&
                <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div>
            }
            {count}{" "}
            <button onClick={() => {
                setCount(count + 1)
            }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + `/img/shoes${id}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoesInfo.title}</h4>
                    <p>{shoesInfo.content}</p>
                    <p>{shoesInfo.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}