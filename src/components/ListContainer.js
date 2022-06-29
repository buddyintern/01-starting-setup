import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ListContainer.modal.css";
const io = require('socket.io-client');
const socket = io('https://buddybackendheb2022.herokuapp.com/');


function ListContainer() {
  const [list, setList] = useState([]);


  useEffect(() => {



    handleFetch();
    socket.on("new product added", (data) => {
      //console.log(data);
      console.log(list)
    });




  }, [list]);

  function handleFetch() {
    // http://localhost:3000/testbuddy/ILyoSau_pd
    axios({
      url: "https://buddybackendheb2022.herokuapp.com/testbuddy/ILyoSau_pd",
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
