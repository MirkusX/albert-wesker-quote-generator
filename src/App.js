import "./App.css";
import { RenderQuote } from "./scripts/Randomizer";
import {
  StyledDiv,
  StyledH1,
  StyledSection,
} from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <StyledSection>
        <StyledH1>Albert Wesker Quote Generator</StyledH1>
        <StyledDiv padding>
          <RenderQuote />
        </StyledDiv>
      </StyledSection>
    </div>
  );
}

export default App;
