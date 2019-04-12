import React from "react";
import {connect} from 'react-redux'

const Smurf = props => {
    return(
        <div>{props.smurf.name} </div>
    ) 
};

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps)(Smurf);