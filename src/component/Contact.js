import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo:false
        }
    }
    onShow = () => {
        this.setState({showInfo:!this.state.showInfo})
    }
    onDeleteClick = (id) => {
        this.props.onDeleteHandler(id)
    }
    render() {
       const  {id,name,age,contact} = this.props
        return (
            <div className="row" style={{paddingTop:'2%',marginTop:'2%'}}>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Contacts 
                            <i  className="fas fa-angle-down" onClick={this.onShow} style={{position:'relative',left:'1%',cursor:'pointer'}}></i>  
                              <i  className="fas fa-times" onClick={this.onDeleteClick.bind(this,id)} style={{float:'right',cursor:'pointer'}}></i> </div>
                            {this.state.showInfo ? (
                            <div className="card-body">
                                <h5>Name: {name}</h5>
                                <h5> Age: {age}</h5>
                                <h5>Contact: {contact}</h5>    
                            </div> )  : null} 
                           
                         </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
} 
// <h1>Name:Sahil</h1><small onClick={this.onShow}>Show more</small>
//                         

Contact.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.string.isRequired,
    contact:PropTypes.number.isRequired,
    onDeleteHandler: PropTypes.func.isRequired
}