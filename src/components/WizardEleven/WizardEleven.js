import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class WizardEleven extends Component {

    render(){
        const {loanType, propertyType, city, propToBeUsedOn, found, realEstateAgent, cost, downPayment, credit, history, addressOne, addressTwo, addressThree, firstName, lastName, email, propType} 
        = this.props;
        console.log('props',this.props)
        return(
            <div className="parent-div">
                <div className="vert-align">                      
                    <p>Here is an over view of your form:</p> 

                    <div>
                        <div className="overarching-div">
                            <div className="form">Name: 
                                <p className="p2">
                                    {firstName} {lastName}
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Email: 
                                <p className="p2">
                                    {email} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">What type of loan will you be needing?: 
                                <p className="p2">
                                    {loanType} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">What type of property are you purchasing?: 
                                <p className="p2">
                                    {propertyType} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">In what city will the property be located?:
                                <p className="p2">
                                    {city}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Type of property the loan is applied to:
                                <p className="p2">
                                    {propToBeUsedOn}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Have you already found your new home?:
                                <p className="p2">
                                    {found}   
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Currently working with a real estate agent?:
                                <p className="p2">
                                    {realEstateAgent}   
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Estimated purchase price of the home:
                                <p className="p2">
                                    {cost} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Down payment:
                                <p className="p2">
                                    {downPayment} 
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Credit score:
                                <p className="p2">
                                    {credit}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Bankruptcy history:
                                <p className="p2">
                                    {history}  
                                </p>
                            </div>
                        </div>

                        <div className="overarching-div">
                            <div className="form">Current Address:
                                <p className="p2">
                                    {addressOne} {addressTwo} {addressThree}
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <Link to="/finish"><button>Submit</button></Link>
                            <Link to="/"><button>Start Over</button></Link>

                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {loanType, propertyType, city, propToBeUsedOn, found, realEstateAgent, cost, downPayment, credit, history, addressOne, addressTwo, addressThree, firstName, lastName, email} 
    = state;
    return{loanType, propertyType, city, propToBeUsedOn, found, realEstateAgent, cost, downPayment, credit, history, addressOne, addressTwo, addressThree, firstName, lastName, email};
}

export default connect(mapStateToProps)(WizardEleven);