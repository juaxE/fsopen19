import React from 'react';
import './App.css';

function App() {
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      const countries = response.data
    })
  })
  
  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <div>find countries <input value={searchString}
    onChange={handleSearchChange}></input></div>
  );
}

export default App;
