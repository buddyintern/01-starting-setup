import ProductList from "./ProductList";
import {useState, useEffect} from "react"
import axios from 'axios';
import './ListContainer.modal.css'


function ListContainer(){

  const [list, setList] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  function handleFetch(){    
    axios({
        url: "https://buddybackendheb2022.herokuapp.com/testbuddy/ILyoSau_pd",
      method: "GET",
      })
      .then((res) => {
        setList(res.data.data)
      })
    }



    return (
        <div className="container">
            <ProductList list={list}/>
        </div>
    )

}

export default ListContainer;