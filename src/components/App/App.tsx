import React, { useState, useEffect } from 'react';import OrderForm from '../OrderForm/OrderForm';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import  GlobalStyle  from '../../styles/globalStyle';
import LoginForm from '../OrderForm/LoginForm';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import { getToken, removeUserSession, setUserSession } from '../../Utils/Common';
import axios from 'axios';


/* interface IApp {
  test?:boolean;
} */



const App: React.FC = () => {
  /* const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://clinic.studio-mind.ru/profile/Authorization:Bearer${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  } */
  return (
   <BrowserRouter>
    <ThemeProvider theme={theme}>
     <GlobalStyle />
     
      <Header />
     <Switch>
     <Route path='/login' 
             render={ () => <LoginForm  /> } />
     <Route path='/registration' 
             render={ () => <OrderForm  /> } />
     <Route path='/profile' 
             render={ () => <Profile  /> } />
      </Switch>

     
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
