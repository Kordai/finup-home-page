//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import ServicePage from './ServicePage';
import { newAccountantRequest, newClientRequest, newFNORequest } from '../../Redux/authReducer';

class ServicePageContainer extends React.PureComponent {

    render() {
        return (<>            
                <ServicePage                    
                    newAccountantRequest={this.props.newAccountantRequest}
                    newClientRequest={this.props.newClientRequest}
                    newFNORequest={this.props.newFNORequest}
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {  
    newAccountantRequest,
    newClientRequest,
    newFNORequest 
})(ServicePageContainer)
