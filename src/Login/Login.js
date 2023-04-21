import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Input, Button, Title } from './styles';
import './style.css';
import firebase from '../data/Firebase';





export default function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
      window.location.href = "./Acesso";
    })
      .catch(error => {
        window.location.href = "./Erro";
      });
  }



  return (
    <Container>
      
        <Title>Seja bem vindo, faça login para continuar </Title>
        <Input type="email" placeholder="Informe seu email"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <Input type="password" placeholder="Informe sua senha"
          value={pass} onChange={e => setPass(e.target.value)}
        />
        <Button onClick={login}> Entrar com e-mail agora </Button>
        <Link to="/Cadastro" className='txt1'> Não possui login? Clique aqui </Link>

      
    </Container>

    

  );
}


