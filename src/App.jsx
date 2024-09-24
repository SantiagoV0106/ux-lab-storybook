import { Select } from "./stories/Select"

function App() {

const options = [
  'primera',
  'segunda',
  'tercera'
]
  
  return (
    <div className="px-24 py-12 bg-gray-200">
      <Select label='select something' defaultOption='default' options={options}/>
    </div>
  )
}

export default App
