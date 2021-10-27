import axios, { AxiosPromise } from 'axios';
import {Form} from '../Interface/types';

/* export const getForms = (): AxiosPromise<
  {list: Form[]}> => axios.get('http://clinic.studio-mind.ru/register',{
    params:{
    nameId: 'Sometime'}}); */
    /* export const getForms1 = (): AxiosPromise<
  {list1: Form[]}> => axios.get('http://clinic.studio-mind.ru/profile',{
    params:{
    nameId: 'Sometime'}}); */
// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token: string, user: any) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

export const createForm = (data:object): AxiosPromise<Form> => axios.post('http://clinic.studio-mind.ru/register', data);

export const createFormL = (data:object):AxiosPromise => axios.post('http://clinic.studio-mind.ru/login', data);

export const getFormL = (data: object):AxiosPromise => axios.get(`http://clinic.studio-mind.ru/profile/Authorization:Bearer${token}`)

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QG1haWwucnUiLCJpYXQiOjE2MzQyODEzNDEsImV4cCI6MTYzNjg3MzM0MX0.bZLigUvj64cZY6flMkJtOrKenP7CTPpKQES13Vwht7k";

/* export function saveToken(token: any) {
  sessionStorage.setItem('accessToken', JSON.stringify(token));
}
function getAccessToken(username: any, password: any) {
  return fetch('http://clinic.studio-mind.ru/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          username,
          password,
      }),
  })
      .then((res) => {
          if (res.status === 200) {
              const accessToken = res.json();
              saveToken(JSON.stringify(accessToken)); // сохраняем полученный токен в sessionStorage, с помощью функции, заданной ранее
              return Promise.resolve()
          }
          return Promise.reject();
      })};

      function refreshToken(token: any) {
        return fetch('http://clinic.studio-mind.ru/login/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    const accessToken = res.json();
                    saveToken(JSON.stringify(accessToken)); // сохраняем полученный обновленный токен в sessionStorage, с помощью функции, заданной ранее
                    return Promise.resolve();
                }
                return Promise.reject();
            });
    }
    export async function fetchWithAuth(url: RequestInfo, options: any) {
    
      const loginUrl = '/login'; // url страницы для авторизации
      let accessToken = null; // объявляем локальную переменную tokenData
  
      if (sessionStorage.authToken) { // если в sessionStorage присутствует tokenData, то берем её
        accessToken = JSON.parse(localStorage.tokenData);
      } else {
         return window.location.replace(loginUrl); // если токен отсутствует, то перенаправляем пользователя на страницу авторизации
      }
  
      if (!options.headers) { // если в запросе отсутствует headers, то задаем их
          options.headers = {};
      }
      
      if (accessToken) {
          if (Date.now() >= accessToken.expires_on * 1000) { // проверяем не истек ли срок жизни токена
              try {
                  const newToken = await refreshToken(accessToken.refresh_token); // если истек, то обновляем токен с помощью refresh_token
                  saveToken(newToken);
              } catch (e) { // если тут что-то пошло не так, то перенаправляем пользователя на страницу авторизации
                 return  window.location.replace('/login');
              }
          }
  
          options.headers.Authorization = `Bearer ${accessToken.token}`; // добавляем токен в headers запроса
      }
  
      return fetch(url, options); // возвращаем изначальную функцию, но уже с валидным токеном в headers
  } */