import axios from 'axios';

const instance = axios.create({
    baseURL: "https://test.finup.kz/",
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }

});

const notInternet = (error) => {
    window.location.href = '/error'
    console.log("нет инета");
    console.log(error)
}

const ConnectToServer = {   
    addUserChat() {
        return instance.post('add_new_user_chat.php')
            .then(response => response.data)
            //.catch(error => notInternet(error))
    },

    setMessage(obj) {  
        return instance.post('add_message.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    
    getMessages(idChat) {  
        return instance.post('get_all_messages.php', idChat)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
}

export default ConnectToServer;