import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Head = styled.header`
background-color: #FFF;
height: 100%;
`

export const HeaderWrap = styled.div`
max-width: 1440px;
margin: 0px auto;
padding-top: 20px;
padding-bottom: 20px;
display: flex;
justify-content: space-around;
align-items: center;

  @media (max-width: 1024px) {
    position: relative;
    display: block; 
  }
`
export const LogoWrap = styled.div`
display: flex;
align-items: center;
gap: 8px;
`
export const NavWrap = styled.div`
display: flex;
align-items: center;
gap: 28px;

@media (max-width: 1024px) {
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
}
`
export const BtnWrap = styled.div`
display: flex;
align-items: center;
gap: 16px;

@media (max-width: 1024px) {
  margin-top: 20px;
  flex-direction: column;
  align-items: flex-end;
  gap: 0;
  button {
    margin-bottom: 10px;
  }
}
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 200px);

@media (max-width: 1024px) {
  display: block;
  width: auto;

  position: absolute;
  right: 5px;
  z-index: 1;
  background-color: rgba(0,0,0,0.1);
  padding: 15px;
  border-radius: 15px;
}
`

export const Burger = styled.div`
cursor: pointer;
`

export const LogoText = styled.p`
  color: #121417;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 120% */
  letter-spacing: -0.4px;
`;
export const Link = styled(NavLink)`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 125% */
  &.active {
    color: #f4c550;
  }
`;
export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 125% */
`;
export const RegBtn = styled.button`
  border-radius: 12px;
  background: #121417;
  padding: 14px 39px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 125% */
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`