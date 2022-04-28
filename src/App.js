import Counter from "./components/Counter/Counter";
import Receipts from "./components/Receipts/Receipts";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

import { useState } from "react";


function App() {
  let [contacts, setContacts] = useState([]);


  function handleNewContact(newContact){
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray)
  }
 

  return (
    <>
     <Counter/>
     <Receipts/>
      <AddContact
      handleNewContact={handleNewContact}/>
      <ContactList
      contacts={contacts}
      />
    </>
  );
}

export default App;
