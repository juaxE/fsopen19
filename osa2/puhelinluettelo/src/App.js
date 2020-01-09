import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/Persons'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    
  ])
  const [errorMessage, setErrorMessage] = useState([])
  useEffect(() => {
    personsService
      .getAll()
      .then(newPersons => setPersons(newPersons)
      )
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newCondition, setNewCondition] = useState('')
  const [errorState, setErrorState] = useState(false)

  const Notification = ({message, error}) => {
    console.log(error)
    
    return (
      <div className={error ? 'Notify-Error' : 'Notify'}>
        {message}
      </div>
    )
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewCondition(event.target.value)
  }

  const handleErrorChange = (message, type) => {
    clearTimeout(timeOut)      
    setErrorMessage(message)
    setErrorState(type)
    timeOut

  }

  const newPerson = (event) => {
    event.preventDefault()
    const names = persons.map(person => person.name)
    
    
    const personObject = {
      name: newName,
      number: newNumber,
    }
    names.includes(newName) ?
      window.confirm(`${newName} is already in the phonebook. Do you want to update?`) ?
      updatePerson()        
        : ""
      :

      personsService
        .create(personObject)
        .then(newPerson => setPersons(persons.concat(newPerson.data),
        handleErrorChange(`Added ${newName}`, false))
        )

    setNewName('')
    setNewNumber('')
      ;
  }

  const timeOut =
      setTimeout(() => {
      setErrorMessage(null),
      setErrorState(false)
    }, 5000)
  

  const deletePerson = (id) => {    
    const p = persons.filter(person => person.id === id)
    window.confirm(`Are you sure you want to delete ${p[0].name}`)
      ?
      personsService
        .remove(id)
        .then(req => req.status===404 ? handleErrorChange(`${p[0].name} has already been removed from the server`, true): handleErrorChange(`Deleted ${p[0].name}`, false))
        .then(setPersons(persons.filter(person => person.id !== id)))
        .catch(handleErrorChange(`${p[0].name} has already been removed from the server`, true))
      
      : ""

  }

  const updatePerson = () => {
    const upPerson = persons.filter(person => person.name === newName)
    const updatedPerson = {
      name: upPerson[0].name,
      number: newNumber,
      id: upPerson[0].id
    }
    console.log(updatedPerson)

    personsService
          .update(updatedPerson.id, updatedPerson)
          .then(setPersons(persons.map(person => updatedPerson.id===person.id ? updatedPerson : person)), handleErrorChange(`Updated ${updatedPerson.name}`, false))
          .then(timeOut)
  }




  const numbers = () =>
    persons.filter(person => person.name.toUpperCase().includes(newCondition.toUpperCase())).map(person =>
      <div key={person.name}>
        <li >{person.name} {person.number}</li> <button onClick={() => deletePerson(person.id)}>delete</button>
      </div>)

  return (
    <div>
      <h2>Phonebook</h2>
      { errorMessage!== null ?
      <Notification message={errorMessage} error={errorState}/>
:""}
      <Filter condition={newCondition}
        handle={handleFilterChange} />
      <h3>add a new number</h3>
      <PersonForm submit={newPerson}
        name={newName}
        nameHandle={handleNameChange}
        number={newNumber}
        numberHandle={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons numbers={numbers()} />

    </div>
  )

}

export default App