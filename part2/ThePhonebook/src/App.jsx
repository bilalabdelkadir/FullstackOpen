import { useState, useEffect } from "react";
import phoneBook from "./services/PhoneBook";
import SuccessNotification from "./components/SuccessNotification";
import ErrorNotification from "./components/ErrorNotification";

// const SuccessNotification = ({ message, onCloseMessage }) => {
//   if (!message) {
//     return null;
//   }
//   return (
//     <div className="success">
//       {message}{" "}
//       <button onClick={onCloseMessage} className="closeButton">
//         X
//       </button>
//     </div>
//   );
// };

// const ErrorNotification = ({ message, onCloseMessage }) => {
//   if (!message) {
//     return null;
//   }
//   return (
//     <div className="error">
//       {message}{" "}
//       <button onClick={onCloseMessage} className="closeButton">
//         X
//       </button>
//     </div>
//   );
// };

const PersonForm = ({
  onSubmit,
  newName,
  nameInput,
  NewPhoneNumber,
  phoneInput,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Add New PhoneBook</h2>
      <div>
        name: <input value={newName} onChange={nameInput} />
      </div>
      <div>
        number: <input value={NewPhoneNumber} onChange={phoneInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={(e) => deletePerson(e, person)}>delete</button>
        </p>
      ))}
    </>
  );
};

const Filter = ({ filterInput, filterValue }) => {
  return (
    <div>
      filer shown with: <input value={filterValue} onChange={filterInput} />
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [NewPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sucessMessage, setSucessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    phoneBook.getAll().then((allNumbers) => setPersons(allNumbers));
  }, []);

  const nameInput = (e) => {
    setNewName(e.target.value);
  };
  const phoneInput = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const filterInput = (e) => {
    setFilterValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: NewPhoneNumber,
    };

    const existingPerson = persons.find(
      (person) => person.name === newPerson.name
    );

    if (existingPerson) {
      const confirmReplace = window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with the new one?`
      );

      if (confirmReplace) {
        const updatedPerson = { ...existingPerson, number: newPerson.number };
        phoneBook
          .update(updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            );
          })
          .catch((error) => {
            setErrorMessage(
              `Information of ${existingPerson.name} has been removed from server`
            );
          });
      }
    } else {
      phoneBook.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      setSucessMessage(
        `${newPerson.name} have been succesfully added to the phonebook`
      );
      setTimeout(() => {
        setSucessMessage(null);
      }, 5000);
      setNewName("");
      setNewPhoneNumber("");
    }
  };
  const onCloseMessage = () => {
    setSucessMessage(null);
    setErrorMessage(null);
  };
  const deletePerson = (e, person) => {
    e.preventDefault();
    window.confirm(`Delete ${person.name}`);
    phoneBook.deletePerson(person.id);
    setPersons(persons.filter((p) => p.id !== person.id));
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification
        onCloseMessage={onCloseMessage}
        message={sucessMessage}
      />
      <ErrorNotification
        message={errorMessage}
        onCloseMessage={onCloseMessage}
      />
      <Filter filterValue={filterValue} filterInput={filterInput} />
      <PersonForm
        onSubmit={onSubmit}
        newName={newName}
        phoneInput={phoneInput}
        nameInput={nameInput}
        NewPhoneNumber={NewPhoneNumber}
      />
      <h2>Numbers</h2>
      <Persons deletePerson={deletePerson} filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
