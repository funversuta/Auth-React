import React,{useState} from 'react';
import { Container, FormControl, Input, Button, InputError, TextDiv,FirstForm} from './LoginForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, Redirect, Route } from 'react-router-dom';
import {  createFormL } from '../../api/form';
import { error } from 'console';



interface IInputs {
    username: string;
    email: string;
    password: string;

}


const LoginForm: React.FC = () => {
  
   
        const {handleSubmit, register, formState: { errors } } = useForm<IInputs>();
        const [loading, setLoading] = useState(false);
        const [blEr, setBlErTrue] = useState(false);
        let [erMes] = useState('');
        const onSubmit: SubmitHandler<IInputs> = async (data) => {
          const formData = {
            ...data,
            nameid: 'Sometime'
          }
          setLoading(true);
         try {
             const response = await createFormL(formData);
             setLoading(false);
             
             console.log(response.data);
         }
         catch (e:any) {//почему то е локал вар и не получается вытащить никак месейдж и вынести даже через переменную в форму текст ошибки.
           setLoading(false);
           setBlErTrue(true);
          
            erMes = (e.message);

            console.log(erMes)
             console.log(e.message);
         } 
        }
     

    return (
      <Container onSubmit={handleSubmit(onSubmit)}>
       <FirstForm>
       <Input placeholder={'E-mail'} inputError={!!errors.username?.message} {...register('username', {
         required: 'Объязательное поле',
         pattern: {
             value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
             message: 'Неверный формат'
         }
       })} />
       {errors.username?.message && <InputError>{errors.username.message}</InputError>}
       </FirstForm>
        <FormControl>
       <Input placeholder={'Пароль'} inputError={!!errors.password?.message} {...register('password', {
           required: 'Объязательное поле',
           pattern: {
               value: /^\d+$/,
               message: 'неверный формат password'
           }
           
       })} />
       {errors.password?.message && <InputError>{errors.password.message}</InputError>}
       {blEr &&  <InputError>{erMes || 'er'} </InputError>} 
         {/* пробовал итак и сяк... не получается вытащить е из catch  */}
       </FormControl>
    
      
       <Button {...console.log(erMes)} disabled={loading}>Войти</Button>
       <TextDiv>Ещё не зарегистрированы? <NavLink style={{color:'cyan'}} to={'/registration '}>Получить аккаунт</NavLink> </TextDiv>
      </Container>
    );
  }
  
  export default LoginForm;
  