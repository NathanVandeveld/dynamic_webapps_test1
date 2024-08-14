import {Section} from "./Section.jsx";

function WikiImage(props) {
    const {imageName} = props;
    return (
        <div className="mx-5">
            <img src={`images/wiki/${imageName}`} className="w-100 h-100" alt=""/>
        </div>
    );
}

function BoldAndItalicLineParts(props) {
    const {line} = props;
    const lineParts = line.split("*");
    return (
        <div>
            {lineParts.map((p, i) => i % 2 ? <b key={i}>{p}</b> : p)}
        </div>
    );
}

function WikiTextLine(props) {
    const {line} = props;
    if (line.startsWith("---")) return <hr/>;
    if (line.startsWith("[[")) return <WikiImage imageName={line.substring(2)}/>;
    return <BoldAndItalicLineParts line={line}/>;
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
