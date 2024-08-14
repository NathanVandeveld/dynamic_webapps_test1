import {WikiText} from "../WikiText.jsx";

const testData = {
    pageNumber: 1,
    title: "test title for wiki text",
    text: [
        "Simple text",
        "Another sentence",
    ]
}
/** WikiText renders 1 wiki object.
 * A wiki object has a (uniaue) pageNumber, a title and a text.
 * The text property is an array of strings.
 */
const meta = {
    component: WikiText,
    tags: ['autodocs'],
    args: {
        wikitext: testData,
        title: "test title"
    },
};

export default meta;

export const Default = {};

