import {Section} from "./Section.jsx";

export function WikiText(props) {
    const {wikitext} = props;
    return (
        <div>
            {wikitext.title}
        </div>
    )
};
