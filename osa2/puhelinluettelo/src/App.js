import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Filter condition={newCondition}
        handle={handleFilterChange} />
      <h3>add a new number</h3>
      <PersonForm submit={newPerson}
        name = {newName}
        nameHandle = {handleNameChange}
        number = {newNumber}
        numberHandle = {handleNumberChange}
        />
      
      <h2>Numbers</h2>
      <Persons numbers = {numbers()} />

    </div>
  )

}

export default App