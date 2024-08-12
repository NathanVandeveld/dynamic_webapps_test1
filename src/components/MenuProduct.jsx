import {Col, Row} from "react-bootstrap";

function ProductSize(props) {
    const {product} = props;
    if (!product?.size) return;

    return (
        <span className="fs-6 text-primary ms-1">
            ({product.size}cl)
        </span>
    );
}

function ProductNote(props) {
    const {product} = props;
    if (!product.note) return;

    return (
        <Row className="fs-6 text-primary">
            <Col>
                {product.note}
            </Col>
        </Row>
    )
        ;
}

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;

    return (
        <>
            <Row className="fs-3">
                <Col>
                    {product.name}
                    <ProductSize product={product}/>
                </Col>
                <Col className="text-end">
                    {product.price} &euro;
                </Col>
            </Row>
            <ProductNote product={product}/>
        </>
    );
}

