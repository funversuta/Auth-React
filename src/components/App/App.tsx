import React, { useState, useEffect } from 'react';import OrderForm from '../OrderLoginForm/OrderForm';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import  GlobalStyle  from '../../styles/globalStyle';
import LoginForm from '../OrderLoginForm/LoginForm';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';

import axios from 'axios';
import authService from '../../services/auth.service';
import Dashboard from '../../api/Dashboard';
import { getToken, removeUserSession, setUserSession } from '../../api/form';
import Home from '../Home/Home';


/* interface IApp {
  test?:boolean;
} */



const App: React.FC = () => {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
   
  
    
    /* Authorization:Bearer${token} */
 
    axios.get(`http://clinic.studio-mind.ru/profile/`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
   <BrowserRouter>
    <ThemeProvider theme={theme}>
     <GlobalStyle />
     
      <Header />
     
     <Route exact path="/register" component={OrderForm} />
     <Route  path="/login" component={LoginForm} />
     
     <Route exact path="/Profile" component={Profile} />
     <Route  path="/home" component={Home} />
      

     
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
