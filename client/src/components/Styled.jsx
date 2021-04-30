import styled from 'styled-components';

const Container = styled.div`
width: 80%;
border-color: 1px solid red;
`;
const ContainerGrid = styled.div`
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
`;

const ButtonWrap = styled.div`
display: flex;
justify-content: space-around;
padding: 5px;
`;

const Header = styled.h1`
text-align: center;
padding:10px;
background-color: white;
color: black;
width: 100%;
right: 1%;
top: -15px;
position:relative;
font-weight: 300;
`;

const Form = styled.form`
color:#EB7326;
font-weight: 700;
font-size: 18px;
`;

const Select = styled.select`
border: 2px solid white;
border-radius: 4px;
font-size: inherit;
opacity: 1;
font-family: sans-serif;
background:transparent;
color: white;
padding: 5px 0px 5px 0px;
`;

const Submit = styled.input`
background: #EB7326;
color: white;
font-family: sans-serif;
font-weight: 600;
font-size 17px;
border-radius:4px;
border-color:transparent;
padding:10px;
&:hover{
  color: #EB7326;
  background: transparent;
  border: 2px solid #EB7326;
  cursor:pointer;
  transition: all .3s linear;
}
`;

const Button = styled.button`
background: #EB7326;
color: white;
font-family: sans-serif;
font-weight: 600;
font-size 17px;
border-radius:4px;
border-color:transparent;
padding:10px;
width: 24%;
overflow:hidden;
text-align:center;
&:hover{
  color: #EB7326;
  background: transparent;
  border: 2px solid #EB7326;
  cursor:pointer;
  transition: all .3s linear;
}
`;

const CityName = styled.div`
padding:7px;
color: white;
`;

const styles = {
  Container, ContainerGrid, ButtonWrap, Header, Form, Select, Submit, CityName, Button,
};

export { styles as default };
