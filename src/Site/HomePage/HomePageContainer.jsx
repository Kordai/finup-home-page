//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';

class HomePageContainer extends React.PureComponent {

    render() {
        return (<>            
                <HomePage                    
                    
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {         
    
})(HomePageContainer)
