import {Card, Col} from "react-bootstrap";
import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";

const COLORS_CAR_CSS = {
    blauw: {backgroundColor: "blue", color: "white"},
    geel: {backgroundColor: "yellow"},
    zwart: {backgroundColor: "black", color: "white"},
    wit: {backgroundColor: "white"},
    rood: {backgroundColor: "red", color: "white"},
    grijs: {backgroundColor: "grey", color: "white"},
    groen: {backgroundColor: "green", color: "white"},
};

function CarColor(props) {
    const {color} = props;

    if (!color) return null;
    return <div style={COLORS_CAR_CSS[color]}>
        kleur: {color} &nbsp;
    </div>;
}

function Car(props) {
    const {car} = props;
    return (
        <SectionCard title={car.name}>
            {car.brand && <div>merk: {car.brand}</div>}
            {car.type && <div>type: {car.type}</div>}
            {car.color && <div>kleur: {car.color}</div>}
            <div className="mt-auto">
                <CarColor color={car.color}/>
            </div>
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

