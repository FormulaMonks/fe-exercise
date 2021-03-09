import styled from "styled-components";
import { Link } from "src/links";

const Root = styled.div`
  align-items: center;
  background-color: #201d29;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
  box-sizing: border-box;
  color: white;
  display: flex;
  min-height: 76px;
  min-width: 100%;
  padding: 0 32px;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
`;

export function Header() {
  return (
    <Root>
      <Logo href="/">Honesto</Logo>
    </Root>
  );
}
