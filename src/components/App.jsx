import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  // ]);
  // const [filterField, setFilterField] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts])


  // const addContact = newContact => {
  //   newContact.id = nanoid(7);
  //   if (newContact.name === '') {
  //     return
  //   }
  //   for (let contact of contacts) {
  //     if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
  //       return toast.info(newContact.name + ' is already in contacts!', {
  //         icon: "🚀"
  //       });
  //     }
  //   }
  //   setContacts(prevContacts => ([newContact, ...prevContacts]));
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => (
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   ));
  // };

  // const changeFilterField = event => {
  //   setFilterField(event.currentTarget.value);
  // };
  
  // const normalizedFilter = filterField.toLowerCase();
  // const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} theme={"light"} icon={false} />
    </div>
  );
}

export default App;
