import styled from "styled-components";
import { accentColor } from "src/colors";
import { Link } from "src/links";

const Root = styled.div`
  align-items: stretch;
  background-color: ${accentColor};
  box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
  box-sizing: border-box;
  color: white;
  display: flex;
  gap: 10px;
  min-height: 76px;
  min-width: 100%;
  padding: 0 32px;
  & > * {
    align-items: center;
    display: flex;
    padding: 0 15px;
  }
`;

const Logo = styled(Link)`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`;

export function Header() {
  return (
    <Root>
      <Logo href="/">Honesto</Logo>
      <NavLink href="/">Give feedback</NavLink>
      <NavLink href="/review">Review feedback</NavLink>
    </Root>
  );
}
