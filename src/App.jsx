import styled from "styled-components";
import Sharingan from "./Sharingan";

const StyledApp = styled.main`
  padding-inline: 3rem;
  height: ${window.innerHeight}px;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 3rem;
  overflow: hidden;

  h1 {
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: clamp(1.2rem, 5vw, 1.8rem);
    opacity: 0.3;
  }

  .sharingan_wrapper {
    height: clamp(20rem, 70vmin, 50rem);
    display: flex;
    align-items: center;
  }
`;

const App = () => {
  return (
    <StyledApp className="App">
      <h1>DevSenpai Motion Sharingan</h1>
      <div className="sharingan_wrapper">
        <Sharingan />
      </div>
    </StyledApp>
  );
};

export default App;
