import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ChangeHandler } from "./types";
import List from "./components/List";
import { PersonTypes } from "./types.tsx";
import phoneService from "./services/phone.ts";

const App = () => {
  const [people, setPeople] = useState<PersonTypes[]>([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState("");

  const handleFilterChange: ChangeHandler = (e) => {
    setFiltered(e.target.value.toLowerCase());
  };
  const handleNameChange: ChangeHandler = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange: ChangeHandler = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const personObject: PersonTypes = { name: newName, number: newNumber };
    if (people.some((person) => person.name === personObject.name)) {
      alert(`You already have ${personObject.name} in your contacts!`);
      return;
    }
    phoneService.create(personObject).then((response) => {
      setPeople([...people, response.data]);
    });
  };
  useEffect(() => {
    phoneService.getAll().then((response) => {
      const persons = response.data;
      setPeople(persons);
    });
  }, []);
  return (
    <div>
      <h2 className="text-3xl">Phonebook</h2>
      <h2 className="text-3xl">
        Filter
        <Input onChange={handleFilterChange} />
      </h2>
      <h2 className="text-3xl">Add a new</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <Input onChange={handleNameChange} />
        </div>
        <div>
          phone: <Input onChange={handleNumberChange} />
        </div>
        <div>
          <Button type="submit">add</Button>
        </div>
      </form>
      <h2 className="text-3xl">Numbers</h2>
      <List people={people} filtered={filtered} />
    </div>
  );
};
export default App;
