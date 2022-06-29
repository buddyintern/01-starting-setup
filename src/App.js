import ListContainer from "./components/ListContainer";
import React from 'react'
import { useState, useEffect } from "react";
import openSocket from "socket.io-client";


function App() {


  const [socket, setSocket] = useState(null);


  useEffect(() => {
    const newSocket = openSocket("https://buddybackendheb2022.herokuapp.com/");

    setSocket(newSocket);
    return () => newSocket.close();

  }, [setSocket]);




  return (
    <div background-color="red">
      {socket?<ListContainer socket={socket}/>:<p>loading</p>}
    </div>
  );
}

export default App;
