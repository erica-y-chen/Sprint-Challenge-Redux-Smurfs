import React from 'react'
import {connect} from 'react-redux'
import {addSmurf} from '../actions'

class NewSmurf extends React.Component{
    constructor(props) {
        super(props); 
        this.state={
            smurf: {
                name: "",
                age: "",
                height: "",
        }
        };
    }

    handleChanges = e => {
        // const {name, value} = e.target;

        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value,
            }        
        });
    };

    render() {
        return(
            <form>
                <input className="input"
                    type="text"
                    name="name"
                    value = {this.state.smurf.name}
                    onChange = {this.handleChanges}
                    placeholder = "name"
                    /> 
                <input className="input"
                    type="text"
                    name="age"
                    value = {this.state.smurf.age}
                    onChange = {this.handleChanges}
                    placeholder = "age"
                /> 

                <input className="input"
                    type="text"
                    name="height"
                    value = {this.state.smurf.height}
                    onChange = {this.handleChanges}
                    placeholder = "height"
                /> 
                <button onClick = {(e) => {
                    e.preventDefault();
                    this.props.addSmurf(this.state.smurf);
                    
                    this.setState({
                        smurf: {
                            name: '',
                            age: '',
                            height: '',
                        }
                    })
                    }}>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    };
};

export default connect(mapStateToProps, {addSmurf})(NewSmurf);