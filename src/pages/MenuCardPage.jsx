import {MenuCard} from "../components/MenuCard.jsx";

export function MenuCardPage(props) {
    const {products} = props;
    return <MenuCard products={products}/>
}
