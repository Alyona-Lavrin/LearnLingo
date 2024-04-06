import styled from "styled-components";

export const CardWrapper = styled.div`
max-width: 1136px;
padding: 24px;
border-radius: 24px;
background-color: #FFFFFF;
display: flex;
margin-bottom: 32px;
gap: 48px;

@media (max-width: 1024px) {
    display: block; 
    margin: auto;
    padding: 10px 15px;
    margin-bottom: 50px;
    position: relative;
  }

`
export const AvatarWrapp = styled.div`
position: relative;
`
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fbe9ba;
  padding: 12px;

  @media (max-width: 1024px) {
    margin: auto;
  }
`;

export const TopContentWrap = styled.div`
  display: flex;
  gap: 149px;
  height: 24px;
  
  @media (max-width: 1024px) {
    display: block;
    height: auto;
  }
`;
export const TopTextWrap = styled.div`
display: flex;

@media (max-width: 1024px) {
    display: block;
  }

`
export const TopText = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
  margin-bottom: 10px;
  
  &::after {
    content: "|";
    margin-left: 16px;
    margin-right: 16px;
    color: #12141733;
  }

  @media (max-width: 1024px) {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 0;

    &::after {
      content: "";
      display: none;
    }
  }
`;
export const IconBox = styled.div`
display: flex;
gap: 8px;
align-items: center;
@media (max-width: 1024px) {
    display: block;
    svg {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`
export const Btn = styled.p`
@media (max-width: 1024px) {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`
export const LastText = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
  margin-right: 40px;
  @media (max-width: 1024px) {
    margin-right: 0;
  }

`;
export const FirstText = styled.p`
  color: #8a8a89;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
`;
export const Span = styled.span`
  color: #38cd3e;
`;
export const Title = styled.h2`
  color: #121417;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 100% */
  margin-bottom: 32px;
`;
export const Box = styled.div`
/* display: flex;
flex-wrap: wrap; */

`
export const TitleWrap = styled.div`
margin-top: 8px;
`
export const ContBox = styled.div`
display: flex;
margin-bottom: 8px;

@media (max-width: 1024px) {
  display: block;
  }
`
export const ContLeft = styled.p`
  color: #8a8a89;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
`;
export const ContRight = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
`;
export const ContRightB = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
export const ReadMoreBtn = styled.button`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
  margin-top: 8px;
  margin-bottom: 32px;
`;
export const LevelsWrap = styled.div`
display: flex;
gap: 8px;

@media (max-width: 1024px) {
    display: block;
  }
`
export const LevelsText = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 114.286%; /* 114.286% */
  border-radius: 35px;
  background: #f4c550;
  padding: 8px 12px;
  border: solid 1px #8a8a89;

  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;
export const Point = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #38cd3e;
  border: 2px solid #FFFFFF;
  position: absolute;
  top: 19px;
  right: 23px;
`;
export const TrialBtn = styled.button`
  margin-top: 32px;
  width: 232px;
  height: 60px;
  background-color: #f4c550;
  padding: 16px 38px;
  border-radius: 12px;
  color: #121417;
  font-size: 18px;
  font-weight: 700;
  line-height: 155.556%; /* 155.556% */
`;