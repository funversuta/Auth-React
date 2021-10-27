import React, { Component, useState } from 'react';
import { Container, FormControl, Input, Button, InputError, TextDiv,FirstForm, TextLabel} from './Profile.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, Redirect, Route } from 'react-router-dom';
import {  createFormL, getFormL } from '../../api/form';
import LoginForm from '../OrderLoginForm/LoginForm';
import axios from 'axios';
import IUser from '../../Interface/types';
import AuthService from "../../services/auth.service";

interface IInputs {
    username: string;
    email: string;
    password: string;

}
type Props = {};

type State = {
  redirect: string | null,
  userReady: boolean,
  currentUser: IUser & { accessToken: string }
}
export default class Profile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { accessToken: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
          <div>
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            </div> : null}
      </div>
    );
  }
}

/* function Profile() {
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
  



  return (
    <Container>
         {blEr && <InputError>{error2} { error1  } </InputError>}
      <TextLabel>
        Profile
      </TextLabel>



      <Button>Выйти</Button>
      <TextDiv>Вы авторизованы! <NavLink to={'/login '}>Выйти </NavLink> </TextDiv>

    </Container>
  );
}
  
  export default Profile;
   */