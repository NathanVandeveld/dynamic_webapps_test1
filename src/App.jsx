import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css'
import {PRODUCTS_DATA} from "./data/data.js";
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {PicturesPage} from "./pages/PicturePage.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
        </Tabs>)
}

export default App
