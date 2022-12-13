import styled from "styled-components";
//Styling
export const QuoteH2 = styled.h2`
  font-size: 0.95rem;
`;

export const StyledButton = styled.button`
  background: black;
  color: lightgreen;
  padding: 1em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #171717;
  }
`;

export const StyledDiv = styled.div`
  background: gray;
  text-align: center;
  width: 50%;
  border-radius: 3px;
  ${(props) => {
    if (props.padding)
      return `
    border: 3px solid gray;`;
  }}
  @media(max-width: 811px) {
    width: 100%;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 50%;
  margin: 0 auto;
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  color: gray;
`;
