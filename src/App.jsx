import { CardState } from "./components/Controls/CardState"

function App() {
  return (
    <>
      <h1>Hello UXLab / Storybook</h1>
      <CardState state='notCompleted' text='Estado' iconName='checkIcon' showIcon={false} />
    </>
  )
}

export default App
