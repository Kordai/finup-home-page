//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { newAccountantRequest, newClientRequest, newFNORequest } from '../../Redux/authReducer';

class HomePageContainer extends React.PureComponent {

    render() {
        return (<>            
                <HomePage                    
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
})(HomePageContainer)
