import React,{ useState} from 'react';
import { Container, FormControl, Input, Button, InputError, TextDiv,  TextCheckBx, IEye, SetAcc, LinkElem, InputError1, DivCheckBx} from './LoginForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, Redirect, Route } from 'react-router-dom';
import {  createFormL, setUserSession } from '../../api/form';
import Checkbox from './checkbox.styled';
import axios from 'axios';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



interface IInputs {
    username: string;
    email: string;
    password: string;

}



const eye = <FontAwesomeIcon icon={faEye} />;
function LoginForm(this: any, props: any) {


  const { handleSubmit, register, formState: { errors } } = useForm<IInputs>();
  const [loading, setLoading] = useState(false);
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  const [value, setCheckbox] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const [CheckedShown, setCheckedShown] = useState(false);
  const [blEr, setBlErTrue] = useState(false);
  let [erMes] = useState('');
  const state = { checked: false }
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
 
  
  
  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const formData = {
      ...data,
      nameid: 'Sometime'
    };
    setLoading(true);
    axios.post('http://clinic.studio-mind.ru/login', data).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));}
      <Redirect to="/Profile" />
      props.history.push('/Profile');
      console.log(response.data);
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError1(error.response.data.message );
      else setError1(error.response.data.message) 
       setError2(error.response.status );
       setBlErTrue(true);
       
      console.log(error.response.data);
    });
  }
   /*  try {
       const response = await createFormL(formData); 
      setLoading(false);

      setUserSession(response.data.token, response.data.user);
      
      console.log(response.data);
    }
    catch (e: any) { 
      setLoading(false);
      setBlErTrue(true);

      erMes = (e.message);

      console.log(erMes);
      console.log(e.message);
    } */
  


  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Input placeholder={'E-mail'} autoComplete={"username"} inputError={!!errors.username?.message} {...register('username', {
          required: 'Объязательное поле',
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Неверный формат'
          }
        })} />
        {errors.username?.message && <InputError>{errors.username.message}</InputError>}
      </FormControl>
      <FormControl>
        <Input placeholder={'Пароль'} autoComplete={"current-password"} type={passwordShown ? "text" : "password"} inputError={!!errors.password?.message} {...register('password', {
          required: 'Объязательное поле',
          pattern: {
            value: /^\d+$/,
            message: 'неверный  password'
          }
        })} /> <IEye  onClick={togglePasswordVisiblity}>{eye}</IEye>
        {errors.password?.message && <InputError1>{errors.password.message}</InputError1>}
        {blEr && <InputError1>{error2} { error1  } </InputError1>}
       

         <DivCheckBx >
        <Checkbox checked={value}  value={value} onChange={target => setCheckbox(!value)}   /> 
       <TextCheckBx> Запомнить меня </TextCheckBx>
        </DivCheckBx>
      </FormControl>


      <Button  disabled={loading}>Войти</Button>
      <TextDiv>Ещё не зарегистрированы?  <LinkElem   exact to={'/register'}> Получить аккаунт</LinkElem></TextDiv>
    </Container>
  );
}
  
  export default LoginForm;
