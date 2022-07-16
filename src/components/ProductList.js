// import { QRCodeSVG } from "qrcode.react";
import ProductItem from "./ProductItem";

import "./ProductList.modal.css";
function ProductList(props) {


  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div>
      {/* <h3 className="title">{props.list.title}</h3> */}
      <div class="container-fluid p-0 mb-4">
        <div class="text-center">
          <h3 className="title" class="d-inline text-light p-3">
            HEB Shopping List
          </h3>
          <button class="d-inline float-right btn-sm btn-light pull-right text-right" onClick={refreshPage}>Log out</button>
        </div>
      </div>

      <div className="products-container">
        {props.list &&
          props.list.map((product) => {
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

      {/* <div className="qrcode">
        <QRCodeSVG value={props.list._id} />
        <h6>List was created at {props.list.createdAt}</h6>
      </div> */}
    </div>
  );
}

export default ProductList;
