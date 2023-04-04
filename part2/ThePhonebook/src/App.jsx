import { useState } from "react";

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

const Persons = ({ filteredPersons }) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
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
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [NewPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

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
      id: persons.length + 1,
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
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewPhoneNumber("");
    }
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
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
