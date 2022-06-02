import ProductList from "./ProductList";
import {useState, useEffect} from "react"
import axios from 'axios';



function ListContainer(){

  const [list, setList] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  function handleFetch(){    
    axios({
      
        url: "http://localhost:3000/testbuddy/ILyoSau_pd",
      method: "GET",
      })
      .then((res) => {
        setList(res.data.data)
      })
    }



    return (
        <div>
            <ProductList list={list}/>
        </div>
    )

}

export default ListContainer;