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
    {id: 5, name: "wijn", price: 2, note: "rood, wit of rosé"},
    {id: 6, name: "cava", price: 3}
];


export const PERSON_DATA = [
    {
        id: 1,
        name: "Jan",
        age: 18,
        city: "Mechelen",
    },
    {
        id: 2,
        name: "Marie",
        age: 25,
        city: "Katelijne",
    },
    {
        id: 3,
        name: "Ahmed",
        age: 16,
        city: "Duffel",
    },
    {
        id: 4,
        name: "Yves",
        age: 24,
        city: "Mechelen",
    },
    {
        id: 5,
        name: "Marijke",
        age: 16,
        city: "Duffel",
    },
    {
        id: 6,
        name: "Furkan",
        age: 16,
        city: "Mechelen",
    },
    {
        id: 7,
        name: "Bart",
        age: 18,
        city: "Mechelen",
    },
    {
        id: 8,
        name: "Marijke",
        age: 28,
        city: "Lier",
    },
    {
        id: 9,
        name: "Dirk",
        age: 20,
        city: "Mechelen",
    },
    {
        id: 10,
        name: "Layla",
        age: 20,
        city: "Lint",
    },
    {
        id: 11,
        name: "Kris",
        age: 19,
        city: "Duffel",
    },
    {
        id: 12,
        name: "Leen",
        age: 21,
        city: "Katelijne",
    },
    {
        id: 13,
        name: "Lieve",
        age: 20,
        city: "Mechelen",
    }
];
;

export const CAR_DATA = [
    {
        id: 1,
        name: "mijn eerste auto",
        brand: "Peugeot",
        type: "204",
        color: "blauw",
        year: 1974,
        note: "klein maar onverwoestbaar"
    },
    {
        id: 2,
        name: "auto van mijn zus",
        brand: "Fiat",
        type: "Punto",
        color: "geel",
        year: 2002,
        note: "die ging altijd kapot"
    },
    {
        id: 3,
        name: "die van mijn pa",
        brand: "Volvo",
        color: "zwart",
        year: 1988,
        note: "veilig, zwaar, onverwoestbaar"
    },
    {
        id: 4,
        name: "geitje",
        brand: "Citroën",
        type: "2CV",
        year: 1978,
        note: "het iconische 'geitje'"
    },
    {
        id: 5,
        name: "oude werkpaard",
        brand: "Peugeot",
        type: "505",
        color: "grijs",
        year: 1985
    },
    {
        id: 6,
        name: "stadskarretje",
        brand: "Fiat",
        type: "Panda",
        color: "wit",
        year: 1990
    },
    {
        id: 7,
        name: "familiewagen",
        brand: "Fiat",
        type: "Tipo",
        color: "groen",
        year: 1996
    },
    {
        id: 8,
        name: "rode rakker",
        brand: "Citroën",
        type: "C4",
        color: "rood",
        year: 2010
    },
    {
        id: 9,
        name: "tweede Panda",
        brand: "Fiat",
        type: "Panda",
        color: "rood",
        year: 1995
    },
    {
        id: 10,
        name: "werkauto",
        brand: "Opel",
        type: "Astra",
        color: "blauw",
        year: 2008,
        note: "handig voor lange ritten"
    },
    {
        id: 11,
        name: "vakantieauto",
        brand: "Volkswagen",
        type: "Golf",
        color: "geel",
        year: 2015,
        note: "betrouwbaar en zuinig"
    },
    {
        id: 12,
        name: "oldtimer",
        brand: "Mercedes",
        type: "190",
        color: "zwart",
        year: 1965,
        note: "prachtig stukje geschiedenis"
    },
    {
        id: 13,
        name: "elektrisch beest",
        brand: "Tesla",
        type: "Model 3",
        color: "blauw",
        year: 2022,
        note: "stil, snel en futuristisch"
    }
];

export const NUMBER_DATA = [1, 3, 5, 2, 6, 7, 34, 12, 66, 98, 11, 2];

export const WIKI_TEST_DATA = [
    {
        pageNumber: 1,
        title: "Tips voor het aanleggen van een moestuin",
        text: [
            "Moestuinieren is hip, en wat is er nu leuker dan groenten en fruit eten van eigen kweek? ",
            "De aanleg van een moestuin is niet moeilijk, ook als je geen of weinig ervaring hiermee hebt. Moestuinieren begint met een goede voorbereiding. ",
            "Het succes van je moestuin heeft alles te maken met de keuze van de plek, de kwaliteit van de grond, de bemesting en het (in)zaaien.",
            "*Is deze basis goed, dan is de helft van het werk al gedaan.*",
            "---",
            "[[zaaien-800x450.jpg"
        ]
    },
    {
        pageNumber: 2,
        title: "Tip 1: Kies de juiste plek",
        text: [
            "Leg je moestuin aan op een plek met zowel zon als schaduw. ",
            "*Maak de ondergrond vlak*, zodat regen- of sproeiwater goed opgenomen kan worden door de planten. ",
            "Is het een winderige plek? Dan is het handig om je moestuin te omheinen met een groene haag. ",
            "Een vak van 1,2 x 1,2 meter is genoeg om mee te beginnen.",
            "[[aardbei5-800x450.jpg"
        ]
    },
    {
        pageNumber: 3,
        title: "Tip 2: Goede grond",
        text: [
            "De *kwaliteit van de grond* is erg belangrijk voor het slagen van de oogst. ",
            "[[Moestuin-800x450.jpg",
            "Bereid de grond, het zaaibed, grondig voor. ",
            "Woel de aarde goed om en verwijder de zo veel mogelijk de oude begroeiing. ",
            "Zorg vooral dat alle ‘onkruidresten’ uit je zaaibed verdwenen zijn. ",
            "De grond mag niet meer bevroren of té vochtig zijn. ",
            "De zaadjes kunnen dan niet goed kiemen. ",
            "Hark de bovenste laag goed los en egaliseer de grond. ",
            "Hoog de plek zo nodig op met tuinaarde.",
            "Zorg dat de bovenste 10 cm van het zaaibed bedekt is met moestuingrond.",
            "[[Zaaien1-800x450.jpg"
        ]
    },
    {
        pageNumber: 4,
        title: "Tip 3: Bemesting",
        text: [
            "Gebruik een *niet te zware bemesting*, daar kunnen _kiemplantjes_ niet goed tegen. ",
            "Een _organische bemesting_ werkt voor een moestuin het beste. ",
            "[[potato-800x450.jpg",
            "Over het _algemeen_ geldt dat hoe *meer* mest, hoe *meer* blad. ",
            "Dat is voor bladgroenten natuurlijk gunstig, maar bijvoorbeeld wortelgroenten geven dan vooral veel loof, en weinig wortel.",
            "Veel groenten houden er wel van om verwend te worden met wat compost."
        ]
    },
    {
        pageNumber: 5,
        title: "Veel plezier met je moestuin!",
        text: [
            "[[Zaaien2-800x450.jpg",
        ]
    },

];
export const BACKPACK_ITEMS = [
    {
        id: 1,
        name: "Zakmes",
        category: "survival",
        weightGrams: 250,
        necessary: true,
        materials: ["staal", "hout"],
        functions: ["snijden", "blik openen", "schroeven draaien", "noodgeval"],
        tags: ["kamperen", "avontuur", "noodgeval"],
        owner: "Tom",
        condition: "goed"
    },
    {
        id: 2,
        name: "EHBO-kit",
        category: "survival",
        weightGrams: 480,
        necessary: true,
        materials: ["katoen", "plastic"],
        functions: ["wondverzorging", "ontsmetten"],
        tags: ["noodgeval", "gezondheid", "hike"],
        owner: "Layla",
        condition: "ongebruikt"
    },
    {
        id: 3,
        name: "Touw",
        category: "survival",
        weightGrams: 760,
        necessary: false,
        materials: ["nylon", "kernmantel"],
        functions: ["ophangen", "zekeren"],
        tags: ["avontuur", "bergen", "kamperen"],
        owner: "Lieve",
        condition: "goed"
    },
    {
        id: 4,
        name: "Kompas",
        category: "navigatie",
        weightGrams: 150,
        necessary: false,
        materials: ["metaal", "glas", "plastic"],
        functions: ["oriëntatie"],
        tags: ["oriëntatie", "bos", "wandeling"],
        owner: "Bart",
        condition: "goed"
    },
    {
        id: 5,
        name: "Topokaart",
        category: "navigatie",
        weightGrams: 95,
        necessary: false,
        materials: ["papier", "coating"],
        functions: ["oriëntatie", "noodnavigatie", "route plannen"],
        tags: ["wandeling", "regen", "bos"],
        owner: "Leen",
        condition: "licht beschadigd"
    },
    {
        id: 6,
        name: "GPS-handheld",
        category: "navigatie",
        weightGrams: 210,
        necessary: true,
        materials: ["kunststof", "elektronica"],
        functions: ["oriëntatie", "route volgen", "hoogte meten", "noodgeval"],
        tags: ["oriëntatie", "bergen", "lange tocht"],
        owner: "Yves",
        condition: "goed"
    },
    {
        id: 7,
        name: "Slaapzak",
        category: "overnachten",
        weightGrams: 1180,
        necessary: true,
        materials: ["nylon", "dons"],
        functions: ["isolatie", "warmte"],
        tags: ["kamperen", "winter", "tent"],
        owner: "Ahmed",
        condition: "gebruikt"
    },
    {
        id: 8,
        name: "Matje",
        category: "overnachten",
        weightGrams: 420,
        necessary: true,
        materials: ["schuim", "folie"],
        functions: ["isolatie"],
        tags: ["tent", "hike", "kamperen"],
        owner: "Dirk",
        condition: "goed"
    },
    {
        id: 9,
        name: "Waterfles",
        category: "eten & drinken",
        weightGrams: 780,
        necessary: true,
        materials: ["kunststof", "rubber"],
        functions: ["water bewaren"],
        tags: ["wandeling", "hitte", "kamperen"],
        owner: "Marie",
        condition: "nieuw"
    },
    {
        id: 10,
        name: "Kookset",
        category: "eten & drinken",
        weightGrams: 940,
        necessary: false,
        materials: ["roestvrij staal", "aluminium", "siliconen"],
        functions: ["water koken", "eten verwarmen", "koken", "noodgeval"],
        tags: ["eten", "kamperen", "bergen"],
        owner: "Yves",
        condition: "goed"
    },
    {
        id: 11,
        name: "Powerbank",
        category: "elektronica",
        weightGrams: 320,
        necessary: true,
        materials: ["lithium", "kunststof"],
        functions: ["opladen", "noodstroom"],
        tags: ["lange tocht", "nacht", "hike"],
        owner: "Furkan",
        condition: "goed"
    },
    {
        id: 12,
        name: "Zaklamp",
        category: "elektronica",
        weightGrams: 290,
        necessary: true,
        materials: ["aluminium", "glas"],
        functions: ["licht geven", "signalen sturen", "noodgeval", "oriëntatie"],
        tags: ["nacht", "grot", "kamperen"],
        owner: "Tom",
        condition: "goed"
    }
];
