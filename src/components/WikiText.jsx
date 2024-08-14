import {Section} from "./Section.jsx";

function WikiTextLine(props) {
    const {line} = props;
    if (line.startsWith("---")) return <hr/>;
    if (line.startsWith("[[")) return (
        <div className="mx-5">
            <img src={`images/wiki/${line.substring(2)}`} className="w-100 h-100" alt=""/>
        </div>
    );
    return (
        <div>{line}</div>
    );
}

export function WikiText(props) {
    const {wikitext} = props;
    return (
        <Section title={wikitext.title}>
            <div className="text-center">
                {wikitext.text.map((l, i) => <WikiTextLine line={l} key={i}/>)}
                <footer>-{wikitext.pageNumber}-</footer>
            </div>
        </Section>
    )
};
