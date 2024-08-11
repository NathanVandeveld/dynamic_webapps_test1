/*
ATTENTION!!!!
    All data in this file is static
    Do not make the mistake to use this data everywhere in the code!
    Use this data only in the root component App.jsx
      and pass it down to the components that use it

    For a larger application it is important to make a distinction between
       * components that own data
       * visual components
    For a real application the data will probably not be hard-coded
      but will come from a database or an API call
    we learn that in the 2nd part of this course....
*/


export const PRODUCTS_DATA = [
    {id: 1, name: "cola", price: 1},
    {id: 2, name: "water", price: 1, note: "plat of bruisend"},
    {id: 3, name: "bier", price: 1, size: 25},
    {id: 4, name: "bier", price: 1, size: 33},
    {id: 5, name: "wijn", price: 2, note:"rood, wit of rosé"},
    {id: 6, name: "cava", price: 3}
];

