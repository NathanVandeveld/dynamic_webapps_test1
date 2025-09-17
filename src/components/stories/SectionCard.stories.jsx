import {SectionCard} from "../SectionCard.jsx";


const testContent = "content";

/** SectionCard renders an area with a specific layout.
 * props.children renders 1 object.
 * title is rendered in a h5.
 * SectionCard is used with Section: it works best if you lay out SectionCards in a Section.
 */
const meta = {
    component: SectionCard,
    tags: ['autodocs'],
    args: {
        title: "Test Title",
        children: testContent,
    },
};

export default meta;

export const Default = {};

