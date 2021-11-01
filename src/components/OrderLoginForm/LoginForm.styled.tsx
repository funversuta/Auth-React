

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IInput {
   inputError?: boolean;
}

export const Container = styled.form `
   position: relative;
width: 445px;
max-height: 311px;
left: 738px;
top: 320px;
padding-top: 40px;
background: #FFFFFF;
border-radius: 10px;
    
   `;

/* export const FirstForm = styled.label `
  margin-top: 40px;
  display:flex;
   flex-direction: column;
   
   max-width: 365px;
   margin-left: 40px;
   margin-bottom: 20px;
   color:#F5F7FA;

`; */

export const FormControl = styled.label `
   display:flex;
   position: relative;
   flex-direction: column;
   
   margin-left: 40px;
 
  
   
   color:#F5F7FA;
   `;



export const Input = styled.input<IInput> `
   height: 50px;
   padding: 20px;
   width: 365px;
   background: #F5F7FA;
  margin-bottom: 10px;
border: 1px solid #C9D6F0;
box-sizing: border-box;
border-radius: 4px;
   border-color: ${({ theme, inputError }) => {
   return inputError ? theme.colors.red : theme.colors.SkyBlue;
}};
   transition: border 0.3s;
   
   outline: none;
   

   &:hover,
   &:focus {
      outline: none;
   }
  `;

export const Button = styled.button `
   
   font-size: 14px;
   
   
   
   background-color: #75EBEB;
   border-radius: 4px;
   margin-left: 40px;
   border-color: #75EBEB  ;
   &:hover,
   &:focus {
      outline: none;
   }
   
width: 365px;
height: 50px;




`;
export const InputError = styled.span `
position: relative;
   font-size: 14px;
   color: ${({ theme }) => theme.colors.red};
   top: -10px;
  margin-top: 6px;
` ; 
 
export const InputError1 = styled.span `
position: relative;
   font-size: 14px;
   color: ${({ theme }) => theme.colors.red};
   top: -25px;
  margin-top: 6px;
` ; 
export const TextDiv = styled.div `
width: 308px;
height: 17px;
font-weight: 500;
font-size: 14px;
line-height: 120%;
   font-weight: bold;
   margin-left: 40px;
   margin-top: 10px;
   margin-bottom: 40px;
   padding-bottom: 40px;
` ; 

export const DivCheckBx = styled.div `
position:relative;
top:-19px;
`;

export const TextCheckBx = styled.span `
 position: relative;

left:7px;



font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 14px;

color: #000000;
 
`;
export const IEye = styled.i `
position: relative ;
left: 330px;

top: -40px;

        color: #798BAD;


`;
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
export const SetAcc = styled.span `
 color: cyan;
 text-decoration: none;
 

`;