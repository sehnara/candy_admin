import React from "react";
import styled from "styled-components";
import Button from '../Button';
import SelectBank from '../Selection';
import Logo from './Logo';

const Container = styled.div`
    flex-direction : column;
    align-items : center;
    justify-content : center;
    display : flex;
`

const LogoContainer = styled.div`
   align-self : flex-end;
   margin-top : 15px;
   margin-bottom : 60px;

`;
const Title = styled.h1`
font-size : 30px;
line-height : 35.16px;
color : #0A376E;
text-align: center;
margin-bottom : 50px;
`;

const InputContainer = styled.div`
display : flex;
flex-direction : column;

`;

const Input = styled.input`
margin-bottom : 60px;
background-color : #F7FAFC;
width : 436px;
height : 70px;
box-shadow :0px 4px 4px rgba(0,0,0,0.25);
border-radius : 5px;
border : none;
`;

const Label = styled.label`
color : #0A376E;
font-size : 20px;
font-weight : bold;
line-height : 22.34px;
margin-bottom : 20px;
`;

const SubmitButton = styled.input`
    width : 175px;
    height : 57px;
    background-color : #0A376E;
    display : flex;
    justify-content :center;
    align-items : center;
    color : white;
    font-size : 16px;
    line-height : 21.5px;
    font-weight : bold;
    border-radius : 3px;
    box-shadow : 0px 4px 9px rgba(0,0,0,0.25);
    margin-top : 50px;
    border: none;
    margin-bottom : 50px;
`;

const SECTION_TITLE = [
    {label : 'teamName', value : "단체명"}, 
    {label : 'socialSecurity',value : "사업자번호(고유번호, 주민번호)"},
    { label : 'account',value : "계좌번호"}, 
    {label : 'password',value : "계좌비밀번호"}, 
    {label : 'easyEnterId',value : "간편조회 아이디"},
    {label : 'easyEnterPassword',value : "간편조회 비밀번호"}
]
const InputForm = () => {
    return (
        <Container>
            {/* 로고 */}
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            {/* 제목 */}
            <Title>캔디 모금계좌 등록</Title>
            <form style={{display : 'flex', flexDirection : "column", justifyContent : 'center', alignItems : "center"}}>
           
            {/* 인풋 폼 */}
            {
                
                [
                    SECTION_TITLE.map((item,index) => {
                        return (
                            <div>
                            {item.label === "account"&&<SelectBank/>}
                            <InputContainer key={index}>
                                <Label htmlFor={item.label}>{item.value}</Label>
                                {
                                    item.label === "password" || item.label === "easyEnterPassword" ? 
                                    <Input type="password" name={item.label} id={item.label}/>
                                    :<Input type="text" name={item.label} id={item.label}/>
                                }
                                
                            </InputContainer>
                            </div>
                        )
                    })
                ]
            }
            <Button text="[필수] 금융기관 약관 동의"/>
            <Button text="[필수] 개인정보 수집 및 이용 동의"/>
            <SubmitButton type="submit" value="제출하기"/>
            </form>
        </Container>
    )
}

export default InputForm