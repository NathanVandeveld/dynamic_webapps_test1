import {Card, Col} from "react-bootstrap";
import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";

function Car(props) {
    const {car} = props;
    return (
        <SectionCard title={car.name}>
            <div>merk: {car.brand}</div>
            <div>type: {car.type}</div>
            <div>kleur: {car.color}</div>
        </SectionCard>
    );
}

export function Cars(props) {
    const {cars, title} = props
    return (
        <Section title={title}>
            {cars.map(c => <Car key={c.id} car={c}/>)}
        </Section>
    );
}

