import React,{useRef, useState} from 'react';
import { Button, Container, FormControl, Input, InputError, TextDiv, InputErrorServer, LinkElem} from './OrderForm.styled';
import { SubmitHandler,  UnpackNestedValue,  useForm } from 'react-hook-form';
import { NavLink, Redirect } from 'react-router-dom';
import { createForm } from '../../api/form';
import axios from 'axios';

interface IInputs {
  email: string;
  username: string;
  lastName: string;
  firstName: string;
  password: string;
  password1: string;
}

function OrderForm(props:any, { }) {
  const { handleSubmit, register, watch , getValues ,formState: { errors } } = useForm<IInputs>({reValidateMode: 'onChange'});
  
  const [loading, setLoading] = useState(false);
  
  const password = watch('password', '')
  const [error1, setError1] = useState(null);
  const [error, setError] = useState(null);
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
      alert(data.email + ' ' +  data.password);
      <Redirect to="/login" />
      props.history.push('/login');
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
      <FormControl>

        <Input placeholder={'E-mail'} inputError={!!errors.email?.message} {...register('email', {
          required: 'Объязательное поле',
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неверный формат E-mail'
          }
        })} />
        {errors.email?.message && <InputError>{errors.email.message}</InputError>}
      </FormControl>
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

        <Input placeholder={'Имя'} inputError={!!errors.firstName?.message} {...register('firstName', {
          required: 'Объязательное поле',
          pattern: {
            value: /\S+[a-z]+.[a-z]+/,
            message: 'неверный формат '
          }
        })} />
        {errors.firstName?.message && <InputError>{errors.firstName.message}</InputError>}
      </FormControl>
      <FormControl>

        <Input placeholder={'Фамилия'} inputError={!!errors.lastName?.message} {...register('lastName', {
          required: 'Объязательное поле',
          pattern: {
            value: /\S+[a-z]+.[a-z]+/,
            message: 'неверный формат '
          }
        })} />
        {errors.lastName?.message && <InputError>{errors.lastName.message}</InputError>}
      </FormControl>
      <FormControl>

        <Input placeholder={'Пароль'} type="password"  inputError={!!errors.password?.message} {...register('password', {
          required: 'Объязательное поле',

          pattern: {
            value: /^\d+$/,
            message: 'You must specify a password'
          }
        })} />
        {errors.password?.message && <InputError>{errors.password.message}</InputError>}
      </FormControl>
      <FormControl>

        <Input placeholder={'Подтверждение пароля'} id='passConfirm' type="password" inputError={!!errors.password1?.message} {...register('password1', {
          required: 'Объязательное поле',
          validate: {
            password1: value => (value === getValues().password) || "The passwords do not match"
          }
        })} />
        
        {errors.password1 && <InputError>{errors.password1.message}</InputError>} 
        </FormControl>
        {blEr && <InputErrorServer> { error1  } </InputErrorServer>}
       
      <Button  disabled={loading}>Зарегистрироваться</Button>
      <TextDiv>Уже есть аккаунт?<LinkElem  to={'/login'}> Войти</LinkElem> </TextDiv>
    </Container>
  );
}
  
export default OrderForm;

