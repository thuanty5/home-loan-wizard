import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {updateFName, updateLName, updateEmail} from '../../ducks/reducer';

class WizardTen extends Component {
    render(){
        const {updateFName, updateLName, updateEmail} = this.props;
        console.log(`fName: ${this.props.firstName} lName: ${this.props.lastName} email: ${this.props.email}`)
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e) => updateFName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e) => updateLName(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e) => updateEmail(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {firstName,lastName,email} = state;
    return{firstName, lastName, email};
}

export default connect(mapStateToProps, {updateFName,updateLName,updateEmail})(WizardTen);