import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types'
export default function Button1(props) {
    const {name,email,contact} = props
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h6>{name}</h6>
                    <h6>{email}</h6>
                    <h6>{contact}</h6>
                </div>
            </div>
        </div>
    )
}



Button1.propTypes ={
    name:PropTypes.string.isRequired  
}
