import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css'
import {PERSON_DATA, PRODUCTS_DATA} from "./data/data.js";
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {PicturesPage} from "./pages/PicturePage.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {PersonsPage} from "./pages/PersonsPage.jsx";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
                <Tab>persons</Tab>
            </TabList>
            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
            <TabPanel>
                <PersonsPage persons={PERSON_DATA}/>
            </TabPanel>
        </Tabs>)
}

export default App
