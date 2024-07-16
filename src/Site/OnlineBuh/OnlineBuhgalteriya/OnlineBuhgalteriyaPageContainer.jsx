//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import OnlineBuhgalteriyaPage from './OnlineBuhgalteriyaPage';

class OnlineBuhgalteriyaPageContainer extends React.PureComponent {

    render() {
        return (<>            
                <OnlineBuhgalteriyaPage                    
                    
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {  
    
})(OnlineBuhgalteriyaPageContainer)
