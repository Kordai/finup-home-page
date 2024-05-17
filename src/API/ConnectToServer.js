import axios from 'axios';

const instance = axios.create({
    baseURL: "https://cabinet.finup.kz/",
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }

});

const notInternet = (error) => {
    window.location.href = '/error'
    console.log("нет инета");
    console.log(error)
}

const ConnectToServer = {   
    getUsers(obj) {
        return instance.post('get_all_users.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getAuthUser(obj) {
        return instance.post('get_auth_user.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getCheckAuthUser(obj) {
        return instance.post('check_id_user.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getMyCompany(obj) {
        return instance.post('get_mycompany.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getALLCompanies(obj) {
        return instance.post('get_companies.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getALLContents(obj) {
        return instance.post('get_contents.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getALLAddrDelivery(obj) {
        return instance.post('get_address_delivery.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getAllWages(obj) {
        return instance.post('get_wages.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getALLApplication(obj) {
        return instance.post('get_applications.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getALLOldApplication(obj) {
        return instance.post('get_old_applications.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    setNewApplication(obj) {
        return instance.post('add_application.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putAuthUser(obj) {//Request update user data
        return instance.put('update_auth_user.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putPassword(obj) {
        return instance.put('update_user_pwd.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putMyCompany(obj) {
        return instance.put('update_mycompany.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    setContents(obj) {
        return instance.post('add_contents_update.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    delContents(obj) {
        return instance.post('delete_contents.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    setClients(obj) {
        return instance.post('add_clients_update.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    delClients(obj) {
        return instance.post('delete_clients.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    setDelivAddress(obj) {
        return instance.post('add_delivery_address_update.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    delDelivAddress(obj) {
        return instance.post('delete_delivery_address.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    updateApplication(obj) {
        return instance.put('update_applications.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    updatePaidApplication(obj) {
        return instance.put('update_applications_paid.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    deleteApplication(obj) {
        return instance.put('delete_applications.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    addUser(obj) {       
        return instance.post('add_user.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putSealImg(img) {
        const formData = new FormData()
        formData.append("image", img)
        return instance.post('upload_seal_img.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    putSignatureImg(img) {
        const formData = new FormData()
        formData.append("image", img)
        return instance.post('upload_signature_img.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    putPayConfirm(obj) {
        return instance.put('update_pay_confirm.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putWages(obj) {
        return instance.put('update_wages.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    addWages(obj) {       
        return instance.post('add_new_wages.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getAllExpensGroups(obj) {       
        return instance.post('get_expens_groups.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    addNewExpensGroups(obj) {       
        return instance.post('add_new_expens_groups.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putExpensGroups(obj) {
        return instance.put('update_expens_group.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getAllExpenses(obj) {       
        return instance.post('get_expenses.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    addNewExpenses(obj) {       
        return instance.post('add_new_expenses.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    delExpenses(obj) {       
        return instance.post('delete_expenses.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putExpenses(obj) {       
        return instance.put('update_expenses.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    deleteWages(obj) {       
        return instance.post('delete_wages.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putExpensesImg(img) {
        const formData = new FormData()
        formData.append("image", img)
        return instance.post('upload_expenses_img.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
            .catch(error => console.log(error))
    },
    addFNO910(obj) {       
        return instance.post('add_fno910.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getAllFNO910(obj) {       
        return instance.post('get_fno910.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putFNO910(obj) {     
        return instance.put('update_fno910.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    addFNO913(obj) {       
        return instance.post('add_fno913.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getAllFNO913(obj) {       
        return instance.post('get_fno913.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putFNO913(obj) {     
        return instance.put('update_fno913.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    updateAVRApplication(obj) {
        return instance.put('update_applications_avr.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    updateEsfApplication(obj) {
        return instance.put('update_applications_esf.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    updateEsfDoneApplication(obj) {
        return instance.put('update_applications_esfdone.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getALLPoints(obj) {       
        return instance.post('get_points.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    setPoints(obj) {   
        return instance.post('add_points.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    delPoints(obj) {
        return instance.post('delete_points.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    getALLChats(obj) {       
        return instance.post('get_all_data_chats.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    setMessage(obj) {  
        return instance.post('add_message.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    setStatusMessage(obj) {  
        return instance.post('add_status_message.php', obj)
            .then(response => response.data)
            .catch(error => notInternet(error))
    },
    putFileChat(file, chat_id) {
        const formData = new FormData()
        formData.append("file", file)
        return instance.post('upload_file_chat.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Chat': chat_id
            }
        })
            .then(response => response.data)
            .catch(error => console.log(error))
    },
}

export default ConnectToServer;