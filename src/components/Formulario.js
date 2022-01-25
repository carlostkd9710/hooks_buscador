import React, { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap'
import useFormulario from './useFormulario';

const Formulario = () => {

    /* const [data, setData] = useState({
        name: '',
        email:''
    });

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const handleInputChange = ({target})=>{
        console.log(target);
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    useEffect(() => {
      console.log("componente montado");
      return () => {
        console.log("componente desmontado");
      };
    }, [data]);
 */
const {data, handleInputChange,handleSubmit}= useFormulario()

  return <div>
      <h1>Formulario de registro</h1>

      <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name='email' value={data.email} onChange={handleInputChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="name" name='nombre' value={data.nombre} onChange={handleInputChange} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>;
};

export default Formulario;
