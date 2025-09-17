import {Cars} from "../Cars.jsx";

const testArray = [
    {id: 1, name: "auto 1", brand: "volvo", type: "S60", year: 2008, color: "grijs" },
    {id: 2, name: "auto 2", brand: "bmw", type: "XM", color: "zwart", note: "notitie bij deze auto" },
];

/** Cars renders an array of car objects.
 * A car object has an id, name, brand, type and color.
 * All props except id are optional.
 * color is in dutch and can be: blauw, geel, zwart, wit, rood, grijs, groen en wit
 */
const meta = {
    component: Cars,
    tags: ['autodocs'],
    args: {
        cars: testArray,
        title: "test title"
    },
};

export default meta;

export const Default = {};

