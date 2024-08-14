import {WikiText} from "../components/WikiText.jsx";

export function WikiPage(props) {
    const {wikidata} = props;
    return (
        <div className="mx-3">
            {wikidata.map(d => <WikiText key={d.pageNumber} wikitext={d}/>)}
        </div>
    );
}