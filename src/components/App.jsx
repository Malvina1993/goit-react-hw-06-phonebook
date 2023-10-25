
import { Form } from "./Form/Form";
import {Contacts} from "./Contacts/Contacts";

// import { useEffect} from "react";
import { Filter } from "./Filter/Filter";

import {useSelector, useDispatch} from 'react-redux'

import {addContact, deleteContact, setFilter} from '../redux/contactsReducer.js'


export const App = () => {
 
  const contacts = useSelector((state) => state.contacts.contactsData);
  const filter = useSelector((state) => state.contacts.filterName)

  const dispatch = useDispatch();
   
  console.log(contacts);

   

  // useEffect(() => {
  //   if (localStorage.getItem('contacts')) {
  //     // setContacts(JSON.parse(localStorage.getItem('contacts')))
  //     // dispatch({type: 'contacts/setContacts', payload:[{id, ...data}, ...contacts]})
  //   }
  // }, [])

  
  // useEffect(() => {
  //    if (contacts.length !== 0) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts])

  const formSubmitHandle = (data, id) => {
   console.log(data)
    // setContacts([{id, ...data}, ...contacts])
    dispatch(addContact({ id, ...data }))
    console.log(contacts)

  }



  const filterChangeHandle = data => {
    // this.setState({
    //   filter: data
    // })
    // setFilter(data);
    dispatch(setFilter(data))
    
  };

  const onContactDelete = (name) => {
   
    dispatch(deleteContact(name))
    
  

    // const newContacts = contacts.filter(contact => contact.name !== name);
    // if (newContacts.length === 0) {
    //   localStorage.removeItem('contacts');
    //   return;
    //  }

    // localStorage.setItem('contacts', JSON.stringify(newContacts));
  

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
