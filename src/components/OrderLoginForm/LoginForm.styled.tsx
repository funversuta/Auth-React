

import styled from 'styled-components';

interface IInput {
   inputError?: boolean;
}

export const Container = styled.form `
   display: flex; 
   flex-direction: column;
   position: relative;
   max-width: 500px;
   max-height: 700px;
   margin: 0px auto ;
   background: white;
    
    box-shadow:
        0pt 0px 0px white,
        0px 0px 0px 0px white ;
    border-radius: 5px;
    padding-bottom: 5px;
   `;

export const FirstForm = styled.label `
  margin-top: 30px;
  display:flex;
   flex-direction: column;
   max-width: 400px;
   margin-left: 50px;
   margin-bottom: 15px;
   

`;

export const FormControl = styled.label `
   display:flex;
   flex-direction: column;
   max-width: 400px;
   margin-left: 50px;
   margin-bottom: 15px;
   `;

export const Label = styled.span `
    font-size: 14px;
    margin-bottom: 10px;
`;

export const Input = styled.input<IInput> `
   height: 40px;
   padding: 0 20px;
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
   width: 400px;
   font-size: 14px;
   font-weight: bold;
   margin-bottom: 10px;
   height: 40px;
   background-color: Cyan;
   border-radius: 4px;
   margin-left: 50px;
   border-color: white  ;
   &:hover,
   &:focus {
      outline: none;
   }

`;
export const InputError = styled.span `
   font-size: 14px;
   color: ${({ theme }) => theme.colors.red};
   margin-top: 10px;

` ; 
export const TextDiv = styled.div `
   font-size: 16px;
   font-weight: bold;
   margin-left: 40px;
   margin-top: 5px;
   margin-bottom: 10px;

` ; 

export const StyledCheckbox = styled.div`
  display: inline-block;
  max-width: 16px;

  height: 16px;
  background: ${({ theme }) => theme.colors.red};
  border-radius: 3px;
  transition: all 150ms;
`;
export const LabelCheckbx = styled.label `
 display: inline-block;
 margin-top: 5px;
 
 
`;
export const TextCheckBx = styled.span `
 margin-top: 5px;
 margin-left: 10px;
 
 
 
`;