//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import ServicePage from './ServicePage';
import { newClientRequest } from '../../Redux/authReducer';

class ServicePageContainer extends React.PureComponent {

    render() {
        return (<>            
                <ServicePage                    
                    newClientRequest={this.props.newClientRequest}
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {  
    newClientRequest 
})(ServicePageContainer)
