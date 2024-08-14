import {Persons} from "../components/Persons";

export function PersonsPage(props) {
    const {persons} = props;
    return (
        <div className="mx-3">
            <Persons persons={persons} title="alle personen"/>
        </div>
    );
}