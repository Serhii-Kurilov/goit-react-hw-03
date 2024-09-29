import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import listContacts from "./contact.json";
import './App.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : listContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('')

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return ([...prevContact, newContact])
    })
  }

  const deleteContact = (id) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== id)
    })
  }

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList contactList={filterContacts} deleteContact={deleteContact} />
</div>

  )
}

export default App