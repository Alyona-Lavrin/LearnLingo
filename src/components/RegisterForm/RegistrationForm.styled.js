import styled from "styled-components";

export const Form = styled.form`
max-width: 566px;
padding: 64px;
display: flex;
flex-direction: column;
`
export const Title = styled.h2`
  color: #121417;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 120% */
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;
export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.5%; /* 137.5% */
  margin-bottom: 40px;
`;
export const InputWrap = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
margin-bottom: 40px;
`
export const Input = styled.input`
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  height: 54px;
  padding-left: 18px;
  outline: none;
  &::placeholder {
    color: #121417;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 137.5%; /* 137.5% */
  }
`;
export const RegisterBtn = styled.button`
  width: 100%;
  height: 60px;
  background-color: #f4c550;
  border-radius: 12px;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 155.556%; /* 155.556% */
  &:hover {
    background-color: #ffdc86;
  }
`;
export const ErrMsg = styled.div`
font-size: 10px;
color: red;
`
export const EyeBtn = styled.button`
position: absolute;
bottom: 180px;
right: 85px;
`