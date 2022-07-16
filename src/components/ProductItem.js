import "./ProductItem.modal.css";
import "bootstrap/dist/css/bootstrap.min.css"

function ProductItem(props){
    return(
        <div className="product">
            <img className="img" src={props.image} alt={props.title}></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h5 className="price">Price: {props.price}</h5>
            <button type="button" class="btn btn-primary me-3">See details</button>
            <button type="button" class="btn btn-danger">Add to cart</button>
        </div>
    )
}

export default ProductItem;