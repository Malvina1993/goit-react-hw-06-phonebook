
import { Form } from "./Form/Form";
import {Contacts} from "./Contacts/Contacts";

import { useEffect, useState } from "react";
import { Filter } from "./Filter/Filter";





export const App = () => {
 

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // const componentDidMount = () => {
  //   if (localStorage.getItem('contacts')) {
  //     this.setState({
  //       contacts: JSON.parse(localStorage.getItem('contacts'))
  //     })
  //   }
  // } 

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')))
    }
  }, [])

  // const componentDidUpdate = () => {
  //   if (this.state.contacts.length !== 0) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
    
    
  // }
  useEffect(() => {
     if (contacts.length !== 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts])

  const formSubmitHandle = (data, id) => {
    // this.setState({
    //   contacts: [{ id, ...data }, ...this.state.contacts],
    
    // })
    setContacts([{id, ...data}, ...contacts])

  }



  const filterChangeHandle = data => {
    // this.setState({
    //   filter: data
    // })
    setFilter(data);
  };

  const onContactDelete = (name) => {
    // this.setState({
    //   contacts: this.state.contacts.filter(contact => contact.name !== name)
    // })

    setContacts(contacts.filter(contact => contact.name !== name));
  

    const newContacts = contacts.filter(contact => contact.name !== name);
    if (newContacts.length === 0) {
      localStorage.removeItem('contacts');
      return;
     }

    localStorage.setItem('contacts', JSON.stringify(newContacts));
  

  };
  

  
    return (
      <div
        style={{
          padding: '32px',
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <p>Phonebook</p>
        <Form
          onSubmit={formSubmitHandle}
          contacts={contacts}
        />
        <p>Contacts</p>
        <Filter
            filter={filter}
            onChange={filterChangeHandle}
        />

        <Contacts
          contacts={contacts}
          filterName={filter}
          onContactDelete={onContactDelete}
        />

      </div>
    );
  
};
