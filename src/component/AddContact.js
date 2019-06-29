import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText ,Modal,ModalHeader,ModalBody,ModalFooter,ListGroup, ListGroupItem } from 'reactstrap';
import Contact from './Contact';

export default class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:'',
            modal: false
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        
    }
    
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


    onHandleChange (e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    } 

    // onSubmit() {
    //     const {name,email,phone} = this.state
    //     let errors = []
    //     if(name !== typeof(string) || !name) {
    //         errors.push({msg:'please enter correct name'})
    //     }
    //     if(Contact.length < 10 || Contact.length > 10) {
    //         errors.push({msg:'pleas e enter correct contact number'})
    //     }
    //     if(errors.length > 0) {
    //          console.log(errors)
    //     }

    // }



    render() {
        const {name,email,phone} = this.state
        return (
            <React.Fragment>
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
                <ListGroup>
                <ListGroupItem>{name}</ListGroupItem>
                <ListGroupItem>{email}</ListGroupItem>
                <ListGroupItem>{phone}</ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>


                <Form  >
                   <FormGroup>
                        <Input 
                            type="text"
                            onChange={this.onHandleChange}
                            name="name"
                            value={this.state.name}
                            placeholder="enter name"
                        />   
                    </FormGroup>   
                    <FormGroup>
                        <Input 
                            type="email"
                            onChange={this.onHandleChange}
                            name="email"
                            value={this.state.email}
                            placeholder="enter email"
                        />   
                    </FormGroup>   
                    <FormGroup>
                        <Input 
                            type="number"
                            onChange={this.onHandleChange}
                            name="phone"
                            value={this.state.phone}
                            placeholder="enter phone"
                        />   
                    </FormGroup>   
                    <FormGroup>
                        <Button onClick={this.toggle}>
                            Show Data
                        </Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}
