import React,{ useState} from 'react';
import { Container, FormControl, Input, Button, InputError, TextDiv,FirstForm, LabelCheckbx, TextCheckBx} from './LoginForm.styled';
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
        <Input placeholder={'Пароль'}  type={passwordShown ? "text" : "password"} inputError={!!errors.password?.message} {...register('password', {
          required: 'Объязательное поле',
          pattern: {
            value: /^\d+$/,
            message: 'неверный  password'
          }
        })} /> <i style={{position: 'absolute',
          top: '38%',
          right: '13%', color: 'skyblue' }} onClick={togglePasswordVisiblity}>{eye}</i>
        {errors.password?.message && <InputError>{errors.password.message}</InputError>}
        {blEr && <InputError>{error2} { error1  } </InputError>}
       

         <LabelCheckbx>
        <Checkbox checked={value}  value={value} onChange={target => setCheckbox(!value)}   /> 
       <TextCheckBx> Запомнить меня </TextCheckBx>
        </LabelCheckbx>
      </FormControl>


      <Button /* {...console.log(erMes)} */ disabled={loading}>Войти</Button>
      <TextDiv>Ещё не зарегистрированы?<NavLink style={{ color: 'cyan' }} to={'/register '}>Получить аккаунт</NavLink> </TextDiv>
    </Container>
  );
}
  
  export default LoginForm;
