import {Card, Col, Container, Row} from "react-bootstrap";

function Person(props) {
    const {person} = props;
    return (
        <Col className="m-0" xs={12} sm={6} md={4} lg={3} xl={2} xxl={2}>
            <Card className="m-1 p-2 shadow-sm text-center">
                <h5>{person.name}</h5>
                <div>{person.age}</div>
                <div>{person.city}</div>
            </Card>
        </Col>
    );
}

export function Persons(props) {
    const {persons, title} = props;
    return (
        <div className="mt-3 pb-2 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}</h2>
            <Container fluid>
                <Row>
                    {persons.map(p => <Person key={p.id} person={p}/>)}
                </Row>
            </Container>
        </div>
    );
}

