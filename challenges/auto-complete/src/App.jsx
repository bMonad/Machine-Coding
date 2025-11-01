import axios from 'axios'
import './App.css'
import AutoComplete from './components/AutoComplete';
import { useState } from 'react';

function App() {
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const fetchSuggestions = async (query) => {
    console.log('API call: ', query);
    const result = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
    if (result.status !== 200) throw new Error("Error fetching data");
    return result.data.products;
  }

  const handleFocus = () => {
    setShowAutoComplete(true);
  }

  const handleBlur = () => {
    setShowAutoComplete(false);
  }

  return (
    <>
      <AutoComplete
        placeholder={"Search..."}
        fetchSuggestions={fetchSuggestions}
        datakey={"title"}
        showAutoComplete={showAutoComplete}
        customLoading={<>Loading...</>}
        onSelect={(res) => console.log("Selected item:", res)}
        onChange={(text) => console.log("Input changed:", text)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        customStyles={{}}
      />
    </>
  )
}

export default App
