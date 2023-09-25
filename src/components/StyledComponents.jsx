
import styled from "styled-components";

export const TableElement = styled.table`
width: 50%;
margin: auto;
color: white;
margin-top: 60px;
`;
export const Checkbox = styled.input`
  margin-right: 10px;
`;
export const HeaderRow = styled.tr`
border: 2px solid rgba(51, 49, 49, 0.356);
    font-weight: bold;
    background: rgba(51, 49, 49, 0.356);
    margin-bottom: 10px;
    display: flex;
    padding: 5px;
    flex-direction: row;
    justify-content: space-around; 
`;

 export const IconButton = styled.button`
background: none;
border: none;
cursor: pointer;
color: white;
margin-right: 10px;
`;

export const FormElement = styled.form`
  background: rgb(183 158 165);
  padding: 25px;
  border-radius: 10px;
  color: white;
`;
export const InputElement = styled.input`
  border-radius: 5px;
  width: 98%;
  height: 30px;
  margin: 20px 0px;
  border-width: 0;
`;

export const ButtonElement = styled.button`
  border-radius: 5px;
  width: 100%;
  height: 30px;
  background: rgb(83 52 67);
  border-width: 0;
  color: white;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

 export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: auto;
  padding: 0px 0px 0px 24px;
`;