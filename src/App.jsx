import styled, { createGlobalStyle, keyframes } from "styled-components";

function App() {
  const bounce = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
  `;
  const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    background-color: black; 
  }`;

  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  `;

  const Form = styled.form`
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    position: relative;
    background: whitesmoke;
    margin-top: 5rem;
    border-radius: 5px;
  `;

  const Title = styled.h1`
    background-color: whitesmoke;
    padding-bottom: 20px;
  `;

  const Input = styled.input`
    max-width: 100%;
    padding: 12px 15px;
    background: #f9f9fa;
    margin-bottom: 0.9rem;
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgba(245, 245, 245, 0.7);
    font-size: 16px;
    &:focus,
    &:hover {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
  `;

  const Div = styled.div`
    background-color: whitesmoke;
    padding: 6px;
  `;
  const Checked = styled.input``;
  const Span = styled.span`
    background-color: whitesmoke;
    color: #008cba;
  `;

  const Button = styled.button`
    max-width: 100%;
    padding: 11px 13px;
    color: rgb(253, 249, 243);
    font-weight: 600;
    text-transform: uppercase;
    background: rgb(70, 130, 180);
    border: none;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease-out;
    &:hover {
      background: #008cba;
      animation: ${bounce} 0.2s ease-out forwards;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form>
          <Title>Sign In</Title>
          <Input type="email" name="email" placeholder="username" />
          <Input type="password" name="password" placeholder="password" />
          <Div>
            <Checked type="checkbox" /> Remember me
          </Div>
          <Div>
            <Checked type="checkbox" /> Agree to <Span>Terms & Conditions</Span>
          </Div>
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </>
  );
}

export default App;
