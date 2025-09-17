import {Numbers} from "../Numbers.jsx";

const testArray = [1,2,3,4,5,6];

/** Numbers renders an array of numbers.
 */
const meta = {
    component: Numbers,
    tags: ['autodocs'],
    args: {
        numbers: testArray,
        title: "test",
    },
};

export default meta;

export const Default = {};

