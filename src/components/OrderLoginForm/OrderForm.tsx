import React,{useRef, useState} from 'react';
import { Button, Container, FormControl, Input, InputError, FirstForm,TextDiv, i, InputErrorServer} from './OrderForm.styled';
import { SubmitHandler,  UnpackNestedValue,  useForm } from 'react-hook-form';
import { NavLink, Redirect } from 'react-router-dom';
import { createForm } from '../../api/form';
import axios from 'axios';

interface IInputs {
  email: string;
  username: string;
  lastname: string;
  firstname: string;
  password: string;
  password_repeat: string;
}


function OrderForm(props:any, { }) {
  const { handleSubmit, register, watch ,formState: { errors } } = useForm<IInputs>();
  const [loading, setLoading] = useState(false);
  const password = useRef({});
  password.current = watch("password", "");
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [blEr, setBlErTrue] = useState(false);
  
  let [erMes] = useState('');
  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const formData = {
      ...data,
      nameid: 'Sometime'
    };
    setLoading(true);
    axios.post('http://clinic.studio-mind.ru/register', data).then(response => {
      setLoading(false);
      
      console.log('succses')
      console.log(response.data);
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 403) setError1(error.response.data.error);
       
      
      else setError1(error.response.data.message) 
       setError2(error.response.status );
       setBlErTrue(true);
       
      console.log(error.response.data);
    });
  }

    /* try {
      const response = await createForm(formData);
      setLoading(false);
      console.log(response.data);
    }
    catch (error: any) {
      setLoading(false);
      setBlErTrue(true);

      erMes = (error.message);

      console.log(erMes);
      console.log(error.message);
      alert(error);
      console.log(error.message);


    }

  }; */


  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FirstForm>

        <Input placeholder={'E-mail'} inputError={!!errors.email?.message} {...register('email', {
          required: 'Объязательное поле',
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неверный формат E-mail'
          }
        })} />
        {errors.email?.message && <InputError>{errors.email.message}</InputError>}
      </FirstForm>
      <FormControl>

        <Input placeholder={'Имя пользователя'} inputError={!!errors.username?.message} {...register('username', {
          required: 'Объязательное поле',
          pattern: {
            value: /\S+[a-z]+.[a-z]+/,
            message: 'неверный формат '
          }
        })} />
        {errors.username?.message && <InputError>{errors.username.message}</InputError>}
      </FormControl>
      <FormControl>

        <Input placeholder={'Имя'} inputError={!!errors.firstname?.message} {...register('firstname', {
          required: 'Объязательное поле',
          pattern: {
            value: /\S+[a-z]+.[a-z]+/,
            message: 'неверный формат '
          }
        })} />
        {errors.firstname?.message && <InputError>{errors.firstname.message}</InputError>}
      </FormControl>
      <FormControl>

        <Input placeholder={'Фамилия'} inputError={!!errors.lastname?.message} {...register('lastname', {
          required: 'Объязательное поле',
          pattern: {
            value: /\S+[a-z]+.[a-z]+/,
            message: 'неверный формат '
          }
        })} />
        {errors.lastname?.message && <InputError>{errors.lastname.message}</InputError>}
      </FormControl>
      <FormControl>

        <Input placeholder={'Пароль'} type="password" inputError={!!errors.password?.message} {...register('password', {
          required: 'Объязательное поле',

          pattern: {
            value: /^\d+$/,
            message: 'You must specify a password'
          }
        })} />
        {errors.password?.message && <InputError>{errors.password.message}</InputError>}
      </FormControl>
      <FormControl>

        <Input placeholder={'Подтверждение пароля'} type="password" inputError={!!errors.password?.message} {...register('password_repeat', {
          required: 'Объязательное поле',
          validate: value =>
            value === password.current || "The passwords do not match"
          
        })} />
        {errors.password_repeat && <InputError>{errors.password_repeat.message}</InputError>} 
        </FormControl>
        {blEr && <InputErrorServer> { error1  } </InputErrorServer>}

      <Button  disabled={loading}>Зарегистрироваться</Button>
      <TextDiv>Уже есть аккаунт?<NavLink style={{ color: 'cyan' }} to={'/login'}> Войти</NavLink> </TextDiv>
    </Container>
  );
}
  
export default OrderForm;
  