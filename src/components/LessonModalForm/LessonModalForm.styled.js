import styled from "styled-components";

export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
  gap: 16px;
  margin-bottom: 40px;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #121417;
    font-size: 16px;
    font-weight: 400;
    line-height: 137.5%; /* 137.5% */
  }

  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }

  label::before {
    content: "";
    border: 2px solid #f4c550;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  input:checked {
    & + label::before {
      content: "";
      height: 20px;
      width: 20px;
      background-color: #f4c550;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const InputWrap = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
`
export const Input = styled.input`
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  padding: 18px 0 18px 16px;
  outline: none;
  &::placeholder {
    color: #121417;
    font-size: 16px;
    font-weight: 400;
    line-height: 137.5%; /* 137.5% */
  }
`;
export const BookBtn = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 40px;
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

   
