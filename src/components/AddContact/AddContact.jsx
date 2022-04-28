import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddContact = (props) => {

    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [phone, setPhone] = useState('');
    let [image, setImage] =useState('')
     
    const handleAdd = e => {
        e.preventDefault()
        let newObj = {
            name,
            surname,
            phone,
            image,
            id: Date.now()
        };
        props.handleNewContact(newObj)
        setName('');
        setSurname('');
        setPhone('');
        setImage('');
        
    }
    return (
       
        <div>
            <h1>ADD CONTACT</h1>
        <Form.Control 
        className='my-3' 
        size="sm" 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>
        <Form.Control 
        className='my-3' 
        size="sm" 
        type="text" 
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)} />
        <Form.Control 
        className='my-3' 
        size="sm" 
        type="text" 
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} />
        <Form.Control 
        className='my-3' 
        size="sm" 
        type="text" 
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)} />
          <Button variant="primary" onClick={handleAdd}>
            Add Contact
          </Button>
    
      </div>
        
    );
};

export default AddContact;

