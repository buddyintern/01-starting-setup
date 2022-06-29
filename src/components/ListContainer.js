import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ListContainer.modal.css";
import openSocket from "socket.io-client";

function ListContainer() {
  const [list, setList] = useState([]);

  

  useEffect(() => {



    handleFetch();
    const socket = openSocket("http://localhost:3000");
    socket.on("new product added", (data) => {
      //console.log(data);
      console.log(list)
    });




  }, [list]);

  function handleFetch() {
    // https://buddybackendheb2022.herokuapp.com
    axios({
      url: "http://localhost:3000/testbuddy/ILyoSau_pd",
      method: "GET",
    }).then((res) => {
      setList(res.data.data);
      // console.log(res.data.data);
    });
  }
  

  return (
    <div className="container">
      <ProductList list={list} />
    </div>
  );
}

export default ListContainer;
