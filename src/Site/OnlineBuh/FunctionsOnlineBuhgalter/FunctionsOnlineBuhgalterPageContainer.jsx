//import s from './MainPanelAdministration.module.css';
import React from 'react';
import { connect } from 'react-redux';
import FunctionsOnlineBuhgalterPage from './FunctionsOnlineBuhgalterPage';

class FunctionsOnlineBuhgalterPageContainer extends React.PureComponent {

    render() {
        return (<>            
                <FunctionsOnlineBuhgalterPage                    
                    
                />           
        </>)
    }
}

const mapStateToProps = (state) => {
    return {    
        
    }
};

export default connect(mapStateToProps, {  
    
})(FunctionsOnlineBuhgalterPageContainer)
