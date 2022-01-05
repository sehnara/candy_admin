import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    width : 436px;
    margin-bottom : 15px;
`;
const Left = styled.div`
    display : flex;
    align-items : center;
`;

const CheckContainer = styled.button`
    border-radius : 50px;
    display : flex;
    align-items : center;
    margin-right : 16px;
    background:none;
    border:none;
    cursor : pointer;
`;

const Right = styled.button`
    background:none;
    border:none;
    cursor:pointer;
`;

const Contents = styled.span`
    color:#0A376E;
    font-size : 14px;
    line-height : 18px;
    font-weight : bold;
`;
const NoContents = styled.span`
    color:#AEADB2;
    font-size : 14px;
    line-height : 18px;
    font-weight : bold;
`;

const Button  = (props: any) => {
    const {text,enrollValues, index, handleAgreement} = props

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        handleAgreement(index);
    }

    // [COMPONENT] 체크 표시 (true)
    const CheckButton = () =>{
        return (
            <CheckContainer onClick={handleClick}>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6668 7.00016C13.6668 3.3183 10.682 0.333496 7.00016 0.333496C3.31823 0.333496 0.333496 3.3183 0.333496 7.00016C0.333496 10.682 3.31823 13.6668 7.00016 13.6668C10.682 13.6668 13.6668 10.682 13.6668 7.00016ZM11.0001 5.33476L6.33343 10.0014L3.33343 7.00143L4.2761 6.05876L6.33343 8.1161L10.0574 4.3921L11.0001 5.33476Z" fill="#0A376E"/>
                </svg>
            </CheckContainer>
        )
    }

    // [COMPONENT] 체크 표시 (false)
    const UnCheckButton = () =>{
        return (
            <CheckContainer onClick={(e)=>handleClick(e)}>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6668 7.00016C13.6668 3.3183 10.682 0.333496 7.00016 0.333496C3.31823 0.333496 0.333496 3.3183 0.333496 7.00016C0.333496 10.682 3.31823 13.6668 7.00016 13.6668C10.682 13.6668 13.6668 10.682 13.6668 7.00016ZM11.0001 5.33476L6.33343 10.0014L3.33343 7.00143L4.2761 6.05876L6.33343 8.1161L10.0574 4.3921L11.0001 5.33476Z" fill="#AEADB2"/>
                </svg>
            </CheckContainer>
        )
    }
    // [component] 오른쪽 화살표 
    const RightArrow = () =>{
        return (
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.95262 12.1083C1.69227 12.3441 1.27016 12.3441 1.00981 12.1083C0.749461 11.8725 0.749461 11.4901 1.00981 11.2543L6.86193 5.95347C7.12228 5.71764 7.54439 5.71764 7.80474 5.95347C8.06509 6.18929 8.06509 6.57164 7.80474 6.80746L1.95262 12.1083Z" fill="#0A376E"/>
                <path d="M7.80473 5.81953C8.06508 6.05536 8.06508 6.4377 7.80473 6.67353C7.54439 6.90935 7.12228 6.90935 6.86193 6.67353L1.00981 1.3727C0.749458 1.13687 0.749458 0.754527 1.00981 0.518704C1.27016 0.28288 1.69227 0.28288 1.95262 0.518704L7.80473 5.81953Z" fill="#0A376E"/>
            </svg>
        )
    }

    // [component] No 오른쪽 화살표 
    const NoRightArrow = () =>{
        return (
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.95262 12.1083C1.69227 12.3441 1.27016 12.3441 1.00981 12.1083C0.749461 11.8725 0.749461 11.4901 1.00981 11.2543L6.86193 5.95347C7.12228 5.71764 7.54439 5.71764 7.80474 5.95347C8.06509 6.18929 8.06509 6.57164 7.80474 6.80746L1.95262 12.1083Z" fill="#AEADB2"/>
                <path d="M7.80473 5.81953C8.06508 6.05536 8.06508 6.4377 7.80473 6.67353C7.54439 6.90935 7.12228 6.90935 6.86193 6.67353L1.00981 1.3727C0.749458 1.13687 0.749458 0.754527 1.00981 0.518704C1.27016 0.28288 1.69227 0.28288 1.95262 0.518704L7.80473 5.81953Z" fill="#AEADB2"/>
            </svg>
        )
    }

    return (
        <Container>
            <Left>
                {enrollValues.agreement[index] ? <CheckButton/>:<UnCheckButton/>}
                {enrollValues.agreement[index] ? <Contents>{text}</Contents>:<NoContents>{text}</NoContents>}
            </Left>
            <Right onClick ={()=> {
                if(index === 0){
                    window.open("https://candyours.com/agreement")
                }
                else{
                    window.open("https://candyours.com/privacy-policy")
                }
            }}>
                {enrollValues.agreement[index]? <RightArrow/> : <NoRightArrow/>}
            </Right>
        </Container>
    )
}
export default Button;