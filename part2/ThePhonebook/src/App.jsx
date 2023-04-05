import { useState, useEffect } from "react";
import phoneBook from "./services/PhoneBook";

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
    if (
      persons.some(
        (person) =>
          person.name === newPerson.name || person.number === newPerson.number
      )
    ) {
      alert(
        `${newPerson.name} and ${newPerson.number} is already added to the phonebook`
      );
    } else {
      phoneBook.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });

      setNewName("");
      setNewPhoneNumber("");
    }
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
