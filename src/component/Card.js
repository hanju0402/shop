import { Col, Container, Row } from "react-bootstrap";

export default function Card(props) {
    return (
        <Container>
            <Row>
                {props.shoes.map((shoe, index) => (
                    <Col key={index}>
                        <img src={process.env.PUBLIC_URL + `/img/shoes${index}.jpg`} width="80%" />
                        <h4>{shoe.title}</h4>
                        <p>{shoe.price}원</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
