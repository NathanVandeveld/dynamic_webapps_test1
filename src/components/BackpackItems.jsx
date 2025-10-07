import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";

/*function itemFunction(props){
    const {funtion} = props;
    return (
        <SectionCard title={funtion.name}>
            <div>{function.filter(f => f.function === function).map()}</div>
        </SectionCard>
    )
}*/
function BackpackItem(props) {
    const {backpackItem} = props;
    /*if (backpackItem.necessary == true) {
        return (
            <div> nodig</div>
        )}
    if (backpackItem.materials == false) {
        return ( <div> niet nodig</div> )
    }*/


    return (
        <SectionCard title = {backpackItem.name}>
           <div>{backpackItem.category} ({backpackItem.tags.toString().replaceAll(","," -- ")})</div>
            <div>gebruikt voor: {backpackItem.functions.toString()}</div>
            <div>eigenaar:{backpackItem.owner}</div>
            <div className="text-strong">{backpackItem.weightGrams} gr</div>
            <div>conditie: {backpackItem.condition}</div>
            <div>{backpackItem.necessary}</div>
        </SectionCard>
    );
}


export function BackpackItems(props) {
    const {backpackItems,title} = props;
    return (
        <Section title={title}>
            {backpackItems.map(b => <BackpackItem key={b.id} backpackItem={b}/>)}
        </Section>
    );
}