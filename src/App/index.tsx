import { Greeting } from "../Greeting";
import "./styles.css";
import styled from "styled-components";

const Root = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export function App() {
  return (
    <Root>
      <Greeting />
    </Root>
  );
}
