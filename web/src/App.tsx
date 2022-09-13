interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title= "Button1" />
      <Button title= "Button2" />
      <Button title= "Button3" />
    </div>
  )
}

export default App
