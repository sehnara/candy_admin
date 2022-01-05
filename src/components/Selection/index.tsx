import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display : flex;
flex-direction : column;
`;

const Label = styled.label`
color : #0A376E;
font-size : 20px;
line-height : 22.34px;
margin-bottom : 20px;
font-weight : bold;
`;

const Select = styled.select`
margin-bottom : 60px;
background-color : #F7FAFC;
width : 436px;
height : 70px;
box-shadow :0px 4px 4px rgba(0,0,0,0.25);
border-radius : 5px;
border : none;
`;

const Banks = ['국민은행', '신한은행', '농협은행', '하나은행', 'SC은행', '우리은행', '새마을금고', '대구은행', '부산은행' ,'산업은행','수협은행', '경남은행','신협', '씨티은행', '광주은행', '우체국', '전북은행', '기업은행', '제주은행', 'K뱅크']

const SelectBank = (props:any) => {
    const {enrollValues, setEnrollValues} = props;
    const [value, setValue] = useState("")

    useEffect(()=>{
        setEnrollValues({...enrollValues,bank:value})
    },[value])

    return (
        <Container>
            <Label htmlFor="banks">은행</Label>
            <Select name="banks" id="banks" value={value} onChange={e=>setValue(e.currentTarget.value)}>
                <option value=""></option>
                {
                    Banks.map((item,index) =>{
                        return (
                            <option key ={index} value={item}>{item}</option>
                        )
                    })
                }
            </Select>
        </Container>
    );
}

export default SelectBank
