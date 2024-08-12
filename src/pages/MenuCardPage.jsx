import {MenuCard} from "../components/MenuCard.jsx";

export function MenuCardPage(props) {
    const {products} = props;
    return (
        <div className="mx-3">
            <MenuCard products={products}/>
        </div>
    );
}
