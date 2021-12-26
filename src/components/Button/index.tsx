import React from 'react';
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

const CheckContainer = styled.div`
    border-radius : 50px;
    width : 16px;
    height : 16px;
    background-color : #0A376E;
    margin-right : 27px;
    display : flex;
    align-items : center;
    justify-content : center;
    
`;

const CheckText = styled.span`
font-size : 10px;
color : white;
font-weight : bold;
`

const Right = styled.div``;

const Contents = styled.span`
    color:#0A376E;
    font-size : 14px;
    line-height : 18px;
    font-weight : bold;
`;

const Button  = (props: { text: string; }) => {
    const {text} = props

    // [COMPONENT] 체크 표시 
    const CheckButton = () =>{
        return (
            <CheckContainer onClick={()=>console.log("dddddd")}>
                <CheckText>✓</CheckText>
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

    return (
        <Container>
            <Left>
                <CheckButton/>
                <Contents>{text}</Contents>
            </Left>
            <Right>
                <RightArrow/>
            </Right>
        </Container>
    )
}
export default Button;