import './App.css'
import AutoComplete from './auto-complete/AutoComplete'

const suggestions = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Quince',
  'Raspberry',
  'Strawberry',
  'Tangerine',
  'Ugli fruit',
  'Vanilla',
  'Watermelon',
  'Xigua',
  'Yellow Passion Fruit',
  'Zucchini'
]
function App() {
  return (
    <>
      <AutoComplete suggestions={suggestions} />
    </>
  )
}

export default App
