import styled from "styled-components";
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const MovieImage = styled.img`
  width: 55px;
  height: 48px;
  margin: 15px;
`;

const RegisterButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Header = ({showLogin, setShowLogin }) => {
  return (
      <HeaderContainer>
        <AppName>
          <MovieImage src="logo12.jpg" />
          Frank's Movie Room
        </AppName>
        {showLogin ?<RegisterButton type="submit" onClick={() => setShowLogin(false)}>Register</RegisterButton> : <LoginButton onClick={() => setShowLogin(true)}>
          Login
        </LoginButton>
        }
      </HeaderContainer>
  )
}

export default Header;