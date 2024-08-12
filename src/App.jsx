import 'normalize.css';
import './App.css'
import {PRODUCTS_DATA} from "./data/data.js";
import {MenuCard} from "./components/MenuCard.jsx";

function App() {
    return (
        <>
            <MenuCard products={PRODUCTS_DATA}/>
        </>
    )
}

export default App
