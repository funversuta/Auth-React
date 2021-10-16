import { format } from "path";
import React from "react";
import { Form } from "../../Interface/types";
import { Container } from "../FormCard/formCard.styled";

const FormCard: React.FC<Form> = ({email, username, firstName, lastName, password}) => {
    
   
    return (
       <Container>
    <span>Name: {username}</span>

       </Container>
    );
}


export default FormCard;