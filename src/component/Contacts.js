import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
    state = {
        Contacts: [
            {
                id:1,
                name:'sahil shah',
                age:'22',
                contact:7977038084
            },
            {
                id:2,
                name:'sahil shah',
                age:'22',
                contact:7977038084
            },
            {
                id:3,
                name:'sahil shah',
                age:'22',
                contact:7977038084
            },
            {
                id:4,
                name:'sahil shah',
                age:'22',
                contact:7977038084
            }
        ]
    }

    onDelete = (id) => {
        const {Contacts} = this.state

         Contacts.filter(contact => {
             this.setState({
                contact:contact.id !== id 
             })
            
         })
        console.log(Contacts) 
    }
    render() {
        const {Contacts} = this.state
        return (
            <div>
                {Contacts.map(contact => (
                    <Contact key={contact.id} id={contact.id} onDeleteHandler={this.onDelete.bind(this,contact.id)} name={contact.name} age={contact.age} contact={contact.contact} />
                ))}
            </div>
        )
    }
}
