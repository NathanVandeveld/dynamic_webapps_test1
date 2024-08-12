import {MenuCard} from "../components/MenuCard.jsx";

export function MenuCardPage(props) {
    const {products} = props;
    return (
        <div style={{margin: "0 2vw"}}>
            <MenuCard products={products}/>
        </div>
    );
}
