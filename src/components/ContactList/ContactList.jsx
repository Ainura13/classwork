import React from 'react';
import { Card } from 'react-bootstrap';

const ContactList = (props) => {
    return (
        <div>
            {props.contacts.map((item)=>(
               <Card style={{ width: '18rem' }} className='m-3'>
               <Card.Img variant="top" src={item.image} />
               <Card.Body>
                 <Card.Title>{item.name}</Card.Title>
                 <Card.Text>
                   {item.surname}
                 </Card.Text>
                 <Card.Text>
                   {item.phone}
                 </Card.Text>
               </Card.Body>
             </Card>
            ))}
        </div>
    );
};

export default ContactList;