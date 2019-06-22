import React, { Component } from 'react'

export default class Show extends Component {
    state ={
        showInfo: false
    }
    onShow = () => {
        this.setState({showInfo:!this.state.showInfo})
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1>Name:Sahil</h1><small onClick={this.onShow}>Show more</small>
                        {this.state.showInfo ? (<div>  <h5>Email:sahilshah2497@gmail.com</h5>
                        <h5>contact:7977038084</h5> </div> ) : null}
                    </div>
                </div>
            </div>
        )
    }
}
