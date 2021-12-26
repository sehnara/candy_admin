import React from "react";
import styled from "styled-components";
import Button from '../Button';
import SelectBank from '../Selection';

const Container = styled.div`
    flex-direction : column;
    align-items : center;
    justify-content : center;
`
const SECTION_TITLE = ['account', 'password', 'socialSecurity']
const InputForm = () => {
    return (
        <Container>
            <h1>캔디 모금계좌 등록</h1>
            <form>
            {/* 은행 선택 */}
            <SelectBank/> 
            {/* 인풋 폼 */}
            {
                
                [
                    SECTION_TITLE.map((item,index) => {
                        return (
                            <div key={index}>
                                <label htmlFor={item}>{item === "account" ? '계좌번호' : item === "password" ? '계좌비밀번호':'주민번호(또는 사업자번호)' }</label>
                                {
                                    item === "password" ? 
                                    <input type="password" name={item} id={item}/>
                                    :<input type="text" name={item} id={item}/>
                                }
                                
                            </div>
                        )
                    })
                ]
            }
            <Button text="[필수] 금융기관 약관 동의"/>
            <Button text="[필수] 개인정보 수집 및 이용 동의"/>
            <input type="submit" value="제출하기"/>
            </form>
        </Container>
    )
}

export default InputForm