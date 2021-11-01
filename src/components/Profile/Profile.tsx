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
  logout() {
    localStorage.removeItem("user");
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
       <NavLink  style={{ color: 'cyan' }} exact to={'/login'}> Выйти
       </NavLink> 
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

