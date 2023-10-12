import "./App.scss";
import { useRef } from 'react';
import Field from "./components/Field";
import Submit from "./components/Submit";
import Form from "./components/Form";

const App = () => {

  const data = { email: "", password: "" }
  const loginForm = useRef();

  const submit = e => {
    e.preventDefault()
    console.log(loginForm.current)
    alert("Bienvenido!!!")
  }
  return(
    <div className="ed-grid">
      <Form submit={submit} formRef={loginForm}>
          <Field type="email" value={data.email} label="Correo electronico"/>
          <Field type="password" value={data.password} label="password"/> 
          <Submit value="Login" />
      </Form>
    </div>
  )
}

export default App;