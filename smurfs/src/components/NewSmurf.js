import React from 'react'
import {connect} from 'react-redux'
import {addSmurf} from '../actions'

class NewSmurf extends React.Component{
    constructor(props) {
        super(props); 
        this.state= {
            name: props.input || ""
        };
    }

    handleChanges = e => {
        this.setState({
            name: e.target.value
        });
    };

    render() {
        return(
            <form onSubmit = {(e) => {
                e.preventDefault();
                this.props.addSmurf(this.state.name);
                
                this.setState({
                    name: '',
                })
            }}>
                <input className="input"
                    type="text"
                    name="name"
                    value = {this.state.name}
                    onChange = {this.handleChanges}
                    placeholder = "name"
                    /> 
                {/* <input className="input"
                    type="text"
                    name="age"
                    value = {this.state.age}
                    onChange = {this.handleChanges}
                    placeholder = "age"
                /> 

                <input className="input"
                    type="text"
                    name="height"
                    value = {this.state.height}
                    onChange = {this.handleChanges}
                    placeholder = "height"
                />  */}
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