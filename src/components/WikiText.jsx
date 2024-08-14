import {Section} from "./Section.jsx";

export function WikiText(props) {
    const {wikitext} = props;
    return (
        <Section title={wikitext.title}>
            <div>
            </div>
        </Section>
    )
};
