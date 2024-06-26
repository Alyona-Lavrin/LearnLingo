import styled from "styled-components";

export const FilterWrap = styled.div`
margin-left: 280px;
display: flex;
gap: 20px;
margin-bottom: 50px;
margin-top: 50px;

@media (max-width: 1024px) {
    display: block; 
    margin: auto;
    text-align: center;
    padding: 10px 0;
    max-width: 250px;
    width: calc(100% - 40px);
  }
`
export const Label = styled.label`
  display: block;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%; /* 128.571% */
  margin-bottom: 8px;
`;

export const Select = styled.select`
  border-radius: 14px;
  background: #fff;
  padding: 10px;
  height: 48px;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 111.111%; /* 111.111% */
  border: none;
  outline: none;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;