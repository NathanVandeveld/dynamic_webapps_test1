import {Persons} from "../Persons.jsx";

const testArray = [
    {id: 1, name: "Jan", age: 18, city: "Mechelen"},
    {id: 2, name: "Marie", age: 25, city: "Katelijne"},
];

/** Persons renders an array of person objects.
 * A person object has an id, name, age and city.
 */
const meta = {
    component: Persons,
    tags: ['autodocs'],
    args: {
        persons: testArray,
        title: "test title"
    },
};

export default meta;

export const Default = {};

