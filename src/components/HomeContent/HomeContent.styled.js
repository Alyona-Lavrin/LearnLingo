import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
height: 100vh;
background-color: #FFF;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 24px;
margin-bottom: 24px;
`
export const LeftWrap = styled.div`
  max-width: 720px;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 98px 64px;
`;
export const Title = styled.h1`
  max-width: 548px;
  margin-bottom: 32px;
  color: #121417;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 116.667%; /* 116.667% */
  letter-spacing: -0.96px;
`;
export const Span = styled.span`
  font-style: italic;
  font-weight: 400;
  background-color: #FBE9BA;
`;
export const Text = styled.p`
max-width: 471px;
margin-bottom: 64px;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.5%; /* 137.5% */
  letter-spacing: -0.32px;
`;
export const StartedBtn = styled.button`
  display: inline-block;
  max-width: 267px;
  height: 60px;
  border-radius: 12px;
  background-color: #f4c550;
  padding: 16px 78px;
  &:hover {
    background-color: #ffdc86;
  }
`;
export const LinkTo = styled(Link)`
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 155.556%; /* 155.556% */
`;
export const RightWrap = styled.div`
position: relative;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  background-color: #fbe9ba;
`;
export const ChildImg = styled.img`
position: absolute;
top: 80px;
left: 114px;
`
export const MacImg = styled.img`
position: absolute;
bottom: 0;
left: 100px;
`
export const AppleImg = styled.img`
position: absolute;
bottom: 55px;
left: 255px;
`
export const List = styled.ul`
max-width: 1312px;
margin: 0 auto;
padding: 40px 0;
  display: flex;
  justify-content: center;
  gap: 100px;
  border-radius: 30px;
  border: 1.5px dashed #f4c550;
`;
export const Item = styled.li`
display: flex;
gap: 16px;
`
export const TextNum = styled.p`
  color: #121417;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.286%; /* 114.286% */
  letter-spacing: -0.56px;
`;
export const TextSec = styled.p`
max-width: 96px;
  color: rgba(18, 20, 23, 0.7);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%; /* 128.571% */
  letter-spacing: -0.28px;
`;