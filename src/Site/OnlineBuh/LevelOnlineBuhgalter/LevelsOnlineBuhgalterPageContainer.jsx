//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import LevelsOnlineBuhgalterPage from './LevelsOnlineBuhgalterPage';

class LevelsOnlineBuhgalterPageContainer extends React.PureComponent {

    render() {
        return (<>            
                <LevelsOnlineBuhgalterPage                    
                    
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {  
    
})(LevelsOnlineBuhgalterPageContainer)
