import { QRCodeSVG } from "qrcode.react";
import ProductItem from "./ProductItem";

import "./ProductList.modal.css";
function ProductList(props) {
  return (
    <div>
      <h3 className="title">{props.list.title}</h3>
      <div className="products-container">
        {props.list.products &&
          props.list.products.map((product) => {
            return (
              <ProductItem
                key={product._id}
                image={product.img}
                title={product.title}
                description={product.desc}
                price={product.price}
              />
            );
          })}
      </div>

      <div className="qrcode">
        <QRCodeSVG value={props.list._id} />
        <h6>List was created at {props.list.createdAt}</h6>
      </div>
    </div>
  );
}

export default ProductList;
