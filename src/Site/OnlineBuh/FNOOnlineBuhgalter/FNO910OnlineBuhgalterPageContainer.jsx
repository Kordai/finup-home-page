//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import FNO910OnlineBuhgalterPage from './FNO910OnlineBuhgalterPage';

class FNO910OnlineBuhgalterPageContainer extends React.PureComponent {

    render() {
        return (<>            
                <FNO910OnlineBuhgalterPage                    
                    
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {  
    
})(FNO910OnlineBuhgalterPageContainer)
