import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const newPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const names = persons.map(person => person.name)
    names.includes(newName) ?
      window.alert(`${newName} is already in the phonebook`)
      : setPersons(persons.concat(personObject))
    setNewName('')
      ;
  }

  
  
  
  const numbers = () =>
    persons.map(person =>
      <li key={person.name}>{person.name} {person.number}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
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