import {WikiText} from "../WikiText.jsx";

const testData = {
    pageNumber: 1,
    title: "test title for wiki text",
    text: [
        "Simple text",
        "Another sentence",
        "---",
        "[[zaaien-800x450.jpg",
        "text with a *bold* word.",
    ]
}
/** WikiText renders 1 wiki object.
 * * A wiki object has a (unique) pageNumber, a title and a text.
 * * The text property is an array of strings.
 * * when a string starts with ---, a line is rendered.
 * * when a string starts with [[, the rest of line contains the filename of an image.
 * * when a part of a string is enclosed between 2 * characters, that part will be rendered as bold.
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

