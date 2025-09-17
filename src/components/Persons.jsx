import {Card, Col} from "react-bootstrap";
import {Section} from "./Section.jsx";

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
        <Section title={title}>
            {persons.map(p => <Person key={p.id} person={p}/>)}
        </Section>
    );
}

