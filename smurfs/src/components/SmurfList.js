import React from 'react';
import { connect } from 'react-redux';
import {getSmurf, deleteSmurf} from '../actions';
import Smurf from './Smurf'
import './smurf.css'

class SmurfList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSmurf(); 
    }


    render() {
        console.log(this.props.smurfs)
        if (this.props.fetching) {
            <div>loading</div>
        }
        return (
            <ul>
            {this.props.smurfs.map(smurf => { 
            return (
                <div>
                {smurf.name}
                <button onClick= {() => this.props.deleteSmurf(smurf.id)} key={smurf.id}>delete</button>
                </div>)})}
                        return (<Smurf smurf={smurf} name={smurf.name}/>)})}
            </ul>
        )
    }
}


const mapStateToProps = state => ({ 
    smurfs: state.smurfs,
    error: state.error, 
    fetching: state.fetchingSmurfs, 
});

export default connect(
    mapStateToProps,
    {
        getSmurf, deleteSmurf
    }
)(SmurfList);