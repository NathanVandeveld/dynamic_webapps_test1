import 'normalize.css';
import './App.css'
import {PRODUCTS_DATA} from "./data/data.js";
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {PicturesPage} from "./pages/PicturePage.jsx";

function App() {
    return (
        <>
            <MenuCardPage products={PRODUCTS_DATA}/>
            <PicturesPage/>
        </>
    )
}

export default App
