import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ListContainer.modal.css";
import Login from "./Login";
// import Confetti from 'react-confetti'
// import useWindowSize from 'react-use/lib/useWindowSize'

function ListContainer({ socket }) {
  const [list, setList] = useState([]);
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  // const { width, height } = useWindowSize()

  useEffect(() => {
    async function handleFetch() {
      // https://buddybackendheb2022.herokuapp.com
      axios({
        url: "https://buddybackendheb2022.herokuapp.com/testbuddy/ILyoSau_pd",
        method: "GET",
      }).then((res) => {
        setList(res.data.data);
        setProducts(res.data.data.products);
        // console.log(res.data.data);
      });
    }
    handleFetch();
  }, []);

  useEffect(() => {
    socket.emit("connection");

    socket.on("new product added", (data) => {
      setProducts([...products, data]);
      window.scrollTo(0, window.document.body.scrollHeight);
    });
  });

  if (visible) {
    return (
      <div className="container">
        <ProductList list={products} className={list} />
      </div>
    );
  }
  else {
    return(
      <Login stateChanger = {setVisible}/>
    )
  }
}

export default ListContainer;
