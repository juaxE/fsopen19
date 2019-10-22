import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newCondition, setNewCondition] = useState('')
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewCondition(event.target.value)
  }

  const newPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const names = persons.map(person => person.name)
    names.includes(newName.toUpper) ?
      window.alert(`${newName} is already in the phonebook`)
      : setPersons(persons.concat(personObject))
    setNewName('')
      ;
  }

  
  
  
  const numbers = () =>
    persons.filter(person => person.name.toUpperCase().includes(newCondition.toUpperCase())).map(person =>
      <li key={person.name}>{person.name} {person.number}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={newCondition}
            onChange={handleFilterChange}
          />
      </div>
      <h3>add a new number</h3>
      <form onSubmit={newPerson}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input value={newNumber}
            onChange={handleNumberChange}
          />
        </div>  
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{numbers()}</div>

    </div>
  )

}

export default App