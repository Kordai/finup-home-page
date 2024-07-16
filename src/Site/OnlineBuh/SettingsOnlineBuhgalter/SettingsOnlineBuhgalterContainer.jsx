//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import SettingsOnlineBuhgalterPage from './SettingsOnlineBuhgalterPage';

class SettingsOnlineBuhgalterPageContainer extends React.PureComponent {

    render() {
        return (<>            
                <SettingsOnlineBuhgalterPage                    
                    
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {  
    
})(SettingsOnlineBuhgalterPageContainer)
