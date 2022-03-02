import styled from "styled-components";
function Home(){
    return (
        <WelcomeWrapper>
            <HeaderFrame>
                <a>Welcome to our shop</a>
            </HeaderFrame>
            </WelcomeWrapper>
    );
}
const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`
const WelcomeWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;

export default Home;