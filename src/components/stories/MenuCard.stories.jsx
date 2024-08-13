import {MenuCard} from "../MenuCard.jsx";

const testProducts = [
    {name: "spagetti", price: 15},
    {name: "mosselen", price: 25, note: "natuur of met wijn"},
    {name: "koninginnenhapje", price: 22},
    {name: "frietjes", price: 7},
];

/** MenuCard renders an array of product objects.
 * A product contains a name, price, and (optionally) a size and a note.
 */
const meta = {
    component: MenuCard,
    tags: ['autodocs'],
    args: {
        products: testProducts,
    },
};

export default meta;

export const Default = {};
