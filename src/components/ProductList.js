import { QRCodeSVG } from "qrcode.react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  return (
    <div>
      <h1>{props.list.title}</h1>

        {props.list.products && props.list.products.map((product) => {
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

      <QRCodeSVG value={props.list._id} />
      <h6>{props.list.createdAt}</h6>
    </div>
  );
}

export default ProductList;
