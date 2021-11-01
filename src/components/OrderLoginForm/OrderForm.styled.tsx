
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IInput {
   inputError?: boolean;
}

export const Container = styled.form `
 
 display:flex;
   position: relative;
   flex-direction: column;
 width: 445px;
 max-height: 620px;
 left: 738px;
 top: 307px;
 padding-top: 40px;

 background: #FFFFFF;
 border-radius: 10px;
   `;

/* export const FirstForm = styled.label `
  margin-top: 30px;
  display:flex;
   flex-direction: column;
   
   margin-bottom: 15px;
   margin-left: 40px;

`; */

export const FormControl = styled.label `
   display:flex;
   flex-direction: column;
   
 
  padding-left: 40px;
   margin-bottom: 10px;
   `;

export const Label = styled.span `
    font-size: 14px;
    margin-bottom: 10px;
`;

export const Input = styled.input<IInput> `
  display:flex;
   width: 365px;
   height: 50px;
   padding: 0 20px;
   background: #F5F7FA;
border: 1px solid #C9D6F0;
box-sizing: border-box;
border-radius: 4px;
   border-color: ${({ theme, inputError }) => inputError ? theme.colors.red : theme.colors.SkyBlue};
   transition: border 0.3s;
   
   outline: none;
   

   &:hover,
   &:focus {
      outline: none;
   }
  `;

export const Button = styled.button `
   width: 365px;
   min-height: 50px;
   font-family: Avenir Next;
font-style: normal;
font-weight: 500;
font-size: 16px;

line-height: 100%;
   margin-bottom: 10px;
   margin-top: 10px;
   background-color: #75EBEB;
   border-radius: 4px;
   margin-left: 40px;
   border-color: #75EBEB  ;

`;
export const InputError = styled.span `
    font-family: Avenir Next;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 120%;
   color: ${({ theme }) => theme.colors.red};
  margin-bottom: 10px;
   /* margin-left: 0px; */

` ; 
export const InputErrorServer = styled.span `
   font-family: Avenir Next;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 120%;
   color: ${({ theme }) => theme.colors.red};
   margin-top: 10px;
   margin-bottom: 10px;
   margin-left: 40px;

` ; 
export const TextDiv = styled.div `
   font-size: 16px;
   font-weight: bold;
   margin-left: 40px;
   padding-bottom: 40px;
   

` ; 
export const LinkElem = styled(NavLink)`
// example style
color: #75EBEB;
text-decoration: none;
&:hover {
   color: cyan;
}
&.active {
  color: cyan;
  text-decoration: none;
}

`;
