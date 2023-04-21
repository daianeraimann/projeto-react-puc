import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {Container, Input, Button, Title} from './styles'
import firebase from '../data/Firebase';
import './style.css';

export default function Cadastro() {
 
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  
  const cadastro = () => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(user => {
      console.log(user);
      const userProfile = {
        email, 
        pass,
        firstName,
        lastName,
        birthdate
      };
      firebase.firestore().collection('users').doc(user.user.uid).set(userProfile);
    })
  }

  return (
    
   <Container>
    
     <Title>Seja bem vindo, faça seu cadastro para continuar </Title>
      <Input type="email" placeholder="Informe seu email"
      value={email} onChange={e=> setEmail(e.target.value)}
      />
      <Input type="password" placeholder="Informe sua senha"
      value={pass} onChange={e=> setPass(e.target.value)}
      />
      <Input type="text" placeholder="Informe seu nome"
      value={firstName} onChange={e=> setFirstName(e.target.value)}
      />
      <Input type="text" placeholder="Informe seu sobrenome"
      value={lastName} onChange={e=> setLastName(e.target.value)}
      />
      <Input type="date" placeholder="Informe sua data de nascimento"
      value={birthdate} onChange={e=> setBirthdate(e.target.value)}
      />
      <Button onClick={cadastro}> Cadastrar </Button>
      <Link to="/Login" className='txt1'> Já possui Cadastro? Clique aqui </Link>

      
      
   </Container>  
  );
}



