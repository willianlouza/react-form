import { useState } from 'react';
import Client from '../core/Client';
import Button from './Button';
import Input from './Input';

interface FormProps{
  client:Client
  cancel?: () => void;
  clientChange?: (client:Client) => void;
}
export default function Form(props:FormProps){
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);
  return(
  <div>
    {
      id?(
        <Input label="Código" value={id} readonly className='mb-5'/>
      ) : false
    }
    <Input label="Nome" value={name} valueChanged={setName} className="mb-5"/>
    <Input label="Idade" tipo="number" value={age} valueChanged={setAge}/>

    <div className='mt-7 flex justify-end'>
      <Button color='blue' className='mr-2' onClick={() => props.clientChange?.(new Client(name, age, id))}>
        {id? 'Alterar':'Salvar'}
      </Button>
      <Button onClick={props.cancel}>
        Cancelar
      </Button>
    </div>
  </div>    
  )
}