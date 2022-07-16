import ListContainer from "./components/ListContainer";
import React from 'react'
import { useState, useEffect } from "react";
import openSocket from "socket.io-client";
import "./index.css"


function App() {


  const [socket, setSocket] = useState(null);


  useEffect(() => {
    const newSocket = openSocket("https://buddybackendheb2022.herokuapp.com/");

    setSocket(newSocket);
    return () => newSocket.close();

  }, [setSocket]);




  return (
    <div className="appbg">
      {socket?<ListContainer socket={socket}/>:<p>loading</p>}
    </div>
  );
}

export default App;
