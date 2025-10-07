import {BackpackItems} from '../BackpackItems.jsx';
import {BACKPACK_ITEMS} from "../../data/data.js";

const backpackArray = [
    {
        id:
            1,
        name:
            "Zakmes",
        category:
            "survival",
        weightGrams:
            250,
        necessary:
            true,
        materials:
            ["staal", "hout"],
        functions:
            ["snijden", "blik openen", "schroeven draaien", "noodgeval"],
        tags:
            ["kamperen", "avontuur", "noodgeval"],
        owner:
            "Tom",
        condition:
            "goed"
    },
    {
        id: 2,
        name:
            "EHBO-kit",
        category:
            "survival",
        weightGrams:
            480,
        necessary:
            true,
        materials:
            ["katoen", "plastic"],
        functions:
            ["wondverzorging", "ontsmetten"],
        tags:
            ["noodgeval", "gezondheid", "hike"],
        owner:
            "Layla",
        condition:
            "ongebruikt"
    }
    ,
    {
        id: 3,
        name:
            "Touw",
        category:
            "survival",
        weightGrams:
            760,
        necessary:
            false,
        materials:
            ["nylon", "kernmantel"],
        functions:
            ["ophangen", "zekeren"],
        tags:
            ["avontuur", "bergen", "kamperen"],
        owner:
            "Lieve",
        condition:
            "goed"
    }
]
const meta = {
    component: BackpackItems,
    tags: ['autodocs'],
    args: {
        backpackItems: backpackArray,
        title: "test title"
    }

};

export default meta;

export const Default = {};