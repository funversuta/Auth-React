import React, { Component, useState } from 'react';
import { Container, FormControl, Input, Button, InputError, TextDiv,FirstForm, TextLabel} from './Profile.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, Redirect, Route } from 'react-router-dom';

import axios from 'axios';


interface IInputs {
    username: string;
    email: string;
    password: string;

}


function Home(props:any, { }) {
    const { handleSubmit, register,  formState: { errors } } = useForm<IInputs>();
    const [loading, setLoading] = useState(false);
    const [blEr, setBlErTrue] = useState(false);
    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);
    
    let [erMes] = useState('');
    const onSubmit: SubmitHandler<IInputs> = async (data) => {
      const formData = {
        ...data,
        nameid: 'Sometime'
      };
      setLoading(true);
      axios.get('http://clinic.studio-mind.ru/profile').then(response => {
        setLoading(false);
        
        console.log('succses')
        console.log(response.data);
      }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError1(error.response.data.error);
         
        
        else setError1(error.response.data.message) 
         setError2(error.response.status );
         setBlErTrue(true);
         
        console.log(error.response.data);
      });
    
    }
  
  
    return (
      <Container onSubmit={handleSubmit(onSubmit)}>
           {blEr && <InputError>{error2} { error1  } </InputError>}
        <TextLabel>
          Profile
        </TextLabel>
  
  
  
        <Button>Запрос профайла с апи</Button>
        <TextDiv>Вы авторизованы! <NavLink to={'/login'}>Выйти </NavLink> </TextDiv>
  
      </Container>
    );
  }

    export default Home;