import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    width : 300px;
`;
const Left = styled.div`
    display : flex;
`;
const Right = styled.div``;

const Button  = (props: { text: string; }) => {
    const {text} = props
    return (
        <Container onClick = {()=>console.log("dddddddd")}>
            <Left>
                <span>{text}</span>
            </Left>
            <Right>fffffff</Right>
        </Container>
    )
}
export default Button;