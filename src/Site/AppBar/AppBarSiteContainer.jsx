//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import AppBarSite from './AppBarSite';
class AppBarSiteContainer extends React.PureComponent {

    render() {
        return (<AppBarSite                    
                    
                />)
    }
}

const mapStateToProps = (state) => {
    return {    
    }
};

export default connect(mapStateToProps, {       
   
})(AppBarSiteContainer)
