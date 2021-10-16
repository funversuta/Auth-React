import React from 'react';
import { Container, FormControl, Input, Button, InputError} from './OrderForm.styled';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IInputs {
    name: string;
    email: string;
    phone: string;
    password: string;

}


const Profile: React.FC = () => {
    const {handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<IInputs> = (data) => {
     console.log(data);
    }


    return (
      
      <Container onSubmit={handleSubmit(onSubmit)}>
       <FormControl>
       <Input placeholder={'E-mail'} {...register('email', {
         required: 'Объязательное поле'
       })} />
       {errors.name?.message && <InputError>{errors.name.message}</InputError>}
       </FormControl>
        <FormControl>
       <Input placeholder={'Пароль'} {...register('password', {
           required: 'Объязательное поле',
           pattern: {
               value: /^\d+$/,
               message: 'неверный формат password'
           }
       })} />
        {errors.name?.message && <InputError>{errors.name.message}</InputError>}
       </FormControl>
      
      
       <Button>Зарегистрироваться</Button>
       
      </Container>
    );
  }
  
  export default Profile;
  