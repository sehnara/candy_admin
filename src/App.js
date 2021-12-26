import styled from "styled-components";
import InputForm from "./components/InputForm/index";

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 52px;
  padding-right: 52px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 504px;
  border-left: 2px solid rgb(243, 243, 243);
  border-right: 2px solid rgb(243, 243, 243);
`;

function App() {
  return (
    <TopContainer>
      <Container>
        <InputForm />
      </Container>
    </TopContainer>
  );
}

export default App;
