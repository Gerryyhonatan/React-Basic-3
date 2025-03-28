import { useId } from "react"

function Input(props) {
  const {id = "input", label} = props;
  const inputId = useId();
  return (
    <>
    <label htmlFor="">
        <span>{label}</span>
        <input type="text" id={`${inputId}-${id}`}/>
    </label>
    <p>Name should contain at least first name and lastname</p>
    </>
  )
}
function App() {

  return (
    <>
      <Input label="Firstname"/>
      <Input />
    </>
  )
}

export default App
