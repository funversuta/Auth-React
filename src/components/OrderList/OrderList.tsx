import React, { useEffect, useState } from "react";
import { Container } from "../OrderLoginForm/OrderForm.styled";
/* import {getForms1} from '../../api/form';
import { Form } from "../../Interface/types";

import FormCard from "../FormCard/formCard";


const OrderList: React.FC = () => {
    const [list, setList] = useState<Form[]>([]);

    const fetchForms = async () => {
        try {
            const { data } = await getForms1();
            setList(data.list1);
        } catch(e:any) {
            console.log(e.message);
        }
    }
    useEffect( () => {
        fetchForms();
    }, [])
    return (
        <Container>
            
        {list.map((form,index)=>{
            <FormCard key={form.email} {...form} />
        })}
        </Container>
    )
}


export default OrderList; */