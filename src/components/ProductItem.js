import "./ProductItem.modal.css";

function ProductItem(props){
    return(
        <div className="product">
            <img className="img" src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <h6 className="price">${props.price}</h6>
        </div>
    )
}

export default ProductItem;