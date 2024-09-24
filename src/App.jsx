import { DemoIcon, Dropdown } from "./stories/Dropdown"

function App() {
  return (
    <div className="px-24 py-12 bg-gray-200">
      <Dropdown title='title' subtitle='subtitle' detailTitle='detail Title' detailSubtitle='detail subtitle' icon={<DemoIcon/>}>
        Aqui va el children
      </Dropdown>
    </div>
  )
}

export default App
