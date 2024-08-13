import {Section} from "../Section.jsx";


const testContent = <>
    <div className="col">col1</div>
    <div className="col">col2</div>
    <div className="col">col3</div>
    <div className="col">col4</div>
    <div className="col">col5</div>
    <div className="col">col6</div>
    <div className="col">col7</div>
    <div className="col">col8</div>
</>;

/** Section renders an area with a specific layout.
 * props.children contains several Cols.
 */
const meta = {
    component: Section,
    tags: ['autodocs'],
    args: {
        children: testContent,
        title: "test title"
    },
};

export default meta;

export const Default = {};

