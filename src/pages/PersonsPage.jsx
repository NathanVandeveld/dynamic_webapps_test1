import {Persons} from "../components/Persons";
import {Card, Col, Container, Row} from "react-bootstrap";

function PersonAge(props) {
    const {age, persons} = props;
    return (
        <Col className="m-0" xs={12} sm={6} md={4} lg={3} xl={2} xxl={2}>
            <Card className="m-1 p-2 shadow-sm text-center">
                <h5>{age}</h5>
                <div>{persons.filter(p => p.age === age).map(p => p.name).join(", ")}</div>
            </Card>
        </Col>
    );
}

function PersonAges(props) {
    const {persons, title} = props;
    const ages = persons.map(p => p.age);
    const uniqueAges = [...new Set(ages)];
    const uniqueAgesSorted = uniqueAges.toSorted((n1, n2) => n1 - n2);
    return (
        <div className="mt-3 pb-2 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}</h2>
            <Container fluid>
                <Row>
                    {uniqueAgesSorted.map(a => <PersonAge key={a} age={a} persons={persons}/>)}
                </Row>
            </Container>
        </div>
    );
}

function City(props) {
    const {city} = props;
    return (
        <Col className="m-0" xs={12} sm={6} md={4} lg={3} xl={2} xxl={2}>
            <Card className="m-1 p-2 shadow-sm text-center">
                <h5>{city.city}</h5>
                <div>{city.numberOfPersons}</div>
            </Card>
        </Col>
    );
}

function Cities(props) {
    const {persons, title} = props;
    const cities = persons.map(p => p.city);
    const uniqueCities = [...new Set(cities)];
    const citiesWithNumberOfPersons = uniqueCities.map(c =>
        ({city: c, numberOfPersons: persons.filter(p => p.city === c).length}));
    const citiesSorted = citiesWithNumberOfPersons.toSorted((c1, c2) => c1.numberOfPersons - c2.numberOfPersons);
    return (
        <div className="mt-3 pb-2 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <h2 className="text-center">{title}</h2>
            <Container fluid>
                <Row>
                    {citiesSorted.map(c => <City key={c.city} city={c}/>)}
                </Row>
            </Container>
        </div>
    );
}

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="alle personen"/>
            <Persons persons={persons.toSorted((pl, pr) => pl.name.localeCompare(pr.name))}
                     title="sorteer op naam"/>
            <Persons persons={persons.toSorted((pl, pr) => pr.name.localeCompare(pl.name))}
                     title="sorteer aflopend op naam"/>
            <Persons persons={persons.toSorted((pl, pr) => pl.age - pr.age)}
                     title="sorteer op leeftijd"/>
            <PersonAges persons={persons} title="leeftijden"/>
            <Cities persons={persons} title="steden"/>
            <Persons persons={persons
                .filter(p => p.city === "Mechelen")
                .toSorted((pl, pr) => pl.name.localeCompare(pr.name))}
                     title="personen van Mechelen"/>
        </div>
    );
}