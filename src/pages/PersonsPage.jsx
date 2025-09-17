import {Persons} from "../components/Persons";

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
        </div>
    );
}