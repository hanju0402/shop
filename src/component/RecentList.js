import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RecentList() {
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [storageIdList, setStorageIdList] = useState([]);
    const displayedData = storageIdList.slice(currentPage - 1, currentPage);

    useEffect(() => {
        let watchedStorage = localStorage.getItem("watched");

        if (!!watchedStorage) {
            let watchEdList = JSON.parse(watchedStorage);

            setStorageIdList(watchEdList);
        }
    }, []);

    function prevPage() {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
    }

    function nextPage() {
        setCurrentPage(currentPage < storageIdList.length ? currentPage + 1 : currentPage);
    }

    if (storageIdList.length === 0) {
        return (
            <div className="container">
                <h5>최근에 보신 상품이 없습니다.</h5>
                <img src={process.env.PUBLIC_URL + `/img/noImage.png`} width="80%" />
            </div>
        );
    }

    return (
        <>
            <h5>최근 본 목록</h5>
            <div>
                <Row>
                    {displayedData.map((item) => (
                        <Col key={item}>
                            {/* 각 데이터 항목을 여기에 렌더링 */}
                            <img
                                src={process.env.PUBLIC_URL + `/img/shoes${item}.jpg`}
                                width="80%"
                                onClick={() => {
                                    navigate(`/detail/${item}`);
                                }}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
            <footer>
                <Button onClick={prevPage}>이전</Button> <span>{currentPage}</span>{" "}
                <Button onClick={nextPage}>다음</Button>
            </footer>
        </>
    );
}
