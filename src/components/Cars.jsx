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
            <div>
                {car.brand && <span>{car.brand}</span>}
                {car.type && <span> / {car.type}</span>}
                {car.year && <span> ({car.year})</span>}
            </div>
            {car.note && <div className="mt-2">opm: {car.note}</div>}
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

