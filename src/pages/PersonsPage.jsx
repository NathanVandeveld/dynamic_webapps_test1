import {Persons} from "../components/Persons";

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="alle personen"/>
            <Persons persons={persons.toSorted((pl, pr) => pl.name.localeCompare(pr.name))}
                     title="sorteer op naam"/>
        </div>
    );
}