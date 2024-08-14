import {Section} from "./Section.jsx";

function WikiTextLine(props) {
    const {line} = props;
    return (
        <div>
            {line}
        </div>
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
