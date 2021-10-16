import React from 'react';
import { Container, FormControl, Input, Button, InputError, TextDiv,FirstForm, TextLabel} from './Profile.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, Route } from 'react-router-dom';
import {  createFormL, getFormL } from '../../api/form';
import LoginForm from '../OrderForm/LoginForm';

interface IInputs {
    username: string;
    email: string;
    password: string;

}


const Profile: React.FC = () => {
    
        const {handleSubmit, register, formState: { errors } } = useForm<IInputs>();
        
    
        const onSubmit: SubmitHandler<IInputs> = async (data) => {
          const formData = {
            ...data,
            nameid: 'Sometime'
          }
         
         try {
             const response = await getFormL(formData);
             console.log(response.data);
         }
         catch (e:any) {
             console.log(e.message);
         }
        }
       

    return (
      <Container onSubmit={handleSubmit(onSubmit)}>
        <TextLabel>
          Profile
        </TextLabel>
      
      
      
       <Button>Выйти</Button>
       <TextDiv>Вы авторизованы! <NavLink  to={'/login '}>Выйти </NavLink> </TextDiv>
       
      </Container>
    );
  }
  
  export default Profile;
  