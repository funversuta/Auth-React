import React,{useState} from 'react';
import { Button, Container, FormControl, Input, InputError, FirstForm,TextDiv} from './OrderForm.styled';
import { SubmitHandler,  UnpackNestedValue,  useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { createForm } from '../../api/form';

interface IInputs {
  email: string;
  username: string;
  lastname: string;
  firstname: string;
  password: string;

}


const OrderForm: React.FC = ({}) => {
    const {handleSubmit, register, formState: { errors } } = useForm<IInputs>();
    const [loading, setLoading] = useState(false);
    
    const [blEr, setBlErTrue] = useState(false);
    let [erMes] = useState('');
    const onSubmit: SubmitHandler<IInputs> = async (data:UnpackNestedValue<IInputs>) => {
      const formData = {
        ...data,
        nameid: 'Sometime'
      }
      
    setLoading(true);
     
     try {
         const response = await createForm(formData);
         setLoading(false);
         console.log(response.data)
     }
     catch (error:any)  {
      setLoading(false);
      setBlErTrue(true);
          
      erMes = (error.message);

      console.log(erMes)
       console.log(error.message);
     alert(error)
     console.log(error.message);
     
         
     }
     
    }
   

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
        
       <Input placeholder={'Пароль'} inputError={!!errors.password?.message} {...register('password', {
           required: 'Объязательное поле',
           pattern: {
               value: /^\d+$/,
               message: 'неверный формат password'
           }
       })} />
       {errors.password?.message && <InputError>{errors.password.message}</InputError>}
       </FormControl>
       <FormControl>
       
        <Input placeholder={'Подтверждение пароля'} inputError={!!errors.password?.message} {...register('password', {
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
      
       <Button disabled={loading}>Зарегистрироваться</Button>
       <TextDiv>Уже есть аккаунт? <NavLink style={{color:'cyan'}} to={'/login'}>Войти</NavLink> </TextDiv>
      </Container>
    );
  }
  
  export default OrderForm;
  