//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import Chat from './Chat';
import { addUserChatRequest } from '../../../Redux/authReducer';
//import { newMessage, setStatusMessageRequest, uploadFileRequest } from '../../../Redux/chatReducer';

class ChatContainer extends React.PureComponent {

    render() {
        return (<Chat  
                    // newMessage={this.props.newMessage}   
                    // setStatusMessageRequest={this.props.setStatusMessageRequest}     
                    // uploadFileRequest={this.props.uploadFileRequest}      
                    addUserChatRequest={this.props.addUserChatRequest}           
                />)
    }
}

const mapStateToProps = (state) => {
    return {        
    }
};

export default connect(mapStateToProps, { 
    // newMessage,
    // setStatusMessageRequest,
    // uploadFileRequest
    addUserChatRequest
})(ChatContainer)
