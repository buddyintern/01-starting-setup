import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ListContainer.modal.css";

function ListContainer({socket}) {
  const [list, setList] = useState([]);
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function handleFetch() {
      // https://buddybackendheb2022.herokuapp.com
      axios({
        url: "https://buddybackendheb2022.herokuapp.com/testbuddy/ILyoSau_pd",
        method: "GET",
      }).then((res) => {
        setList(res.data.data);
        setProducts(res.data.data.products)
        // console.log(res.data.data);
      });
    }
    handleFetch();
  }, [])
  
  useEffect(() => {

    socket.emit('connection')

    socket.on("new product added", (data) => {
      setProducts([...products, data])
      console.log(data)
      });

  }) 



  return (
    <div className="container">
      <ProductList list={products}/>
      {products?products.map(x => <h1 key={x.title}>{x.title}</h1>):"loading"}
    </div>
  );
}

export default ListContainer;
