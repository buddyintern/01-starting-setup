import "./ProductItem.modal.css";

function ProductItem(props){
    return(
        <div>
            <img className="img" src={props.image} alt={props.title}></img>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <h6>${props.price}</h6>
        </div>
    )
}

export default ProductItem;