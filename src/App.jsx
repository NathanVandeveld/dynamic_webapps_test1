import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css'
import {CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA, WIKI_TEST_DATA} from "./data/data.js";
import {MenuCardPage} from "./pages/MenuCardPage.jsx";
import {PicturesPage} from "./pages/PicturePage.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {CarsPage} from "./pages/CarsPage.jsx";
import {PersonsPage} from "./pages/PersonsPage.jsx";
import {NumbersPage} from "./pages/NumbersPage.jsx";
import {WikiPage} from "./pages/WikiPage.jsx";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
                <Tab>persons</Tab>
                <Tab>cars</Tab>
                <Tab>numbers</Tab>
                <Tab>wiki</Tab>
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
            <TabPanel>
                <CarsPage cars={CAR_DATA}/>
            </TabPanel>
            <TabPanel>
                <NumbersPage numbers={NUMBER_DATA}/>
            </TabPanel>
            <TabPanel>
                <WikiPage wikidata={WIKI_TEST_DATA}/>
            </TabPanel>
        </Tabs>)
}

export default App
