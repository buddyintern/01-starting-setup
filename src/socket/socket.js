import {io} from 'socket.io-client'
import { socketMessages } from './socketmessages';

class ProductSocket {

    socket;

    constructor() {
        this.socket = io('https://buddybackendheb2022.herokuapp.com/');
        this.socket.emit(socketMessages.USER_CONNECTED)
    }

    onProductAdded() {
        this.socket.on("new product added", (data) => {
            //console.log(data);
          });
    }

}

export default ProductSocket