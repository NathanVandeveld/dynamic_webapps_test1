import {BackpackItems} from "../components/BackpackItems.jsx";
import {SectionCard} from "../components/SectionCard.jsx";
import {Section} from "../components/Section.jsx";

/*function Functions(props){
    const {functions,title}= props;
    const functionSplit = functions.split(",");
    return(
        <Section title={title}>
            <SectionCard title={a}>
                <div>{backpackItems.filter(p => p.functions === functions).map(p => p.functions).join(", ")}</div>
            </SectionCard>
        </Section>
    )
}*/
export function BackPackPage(props) {
    const {backpackItems} = props;
    return (
        <div className="mx-3">
            <BackpackItems backpackItems={backpackItems} title="de ganse rugzak"/>
            <BackpackItems backpackItems={backpackItems.filter(b => b.tags === "bos","hike")}
                           title="items met tag bos of hike"/>
            <BackpackItems backpackItems={backpackItems.toSorted((ab, cd) => ab.functions.length - cd.functions.length)}
                           title="sorteer per aantal functies oplopend"/>
            <BackpackItems backpackItems={backpackItems} title="functies"/>

        </div>
    )
}