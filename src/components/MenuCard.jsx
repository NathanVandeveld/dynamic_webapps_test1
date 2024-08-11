import {MenuProduct} from "./MenuProduct.jsx";

export function MenuCard(props) {
    const {products} = props;
    return (
        <div>
            <h1>Menu</h1>
            {products.map(p => <MenuProduct key={p.id} product={p}/>)}
        </div>
    );
}