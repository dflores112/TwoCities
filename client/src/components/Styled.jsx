import styled from 'styled-components';

const Container = styled.div`
width: 80%;
margin:auto;
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

const Header = styled.div`
text-align: left;
padding:10px;
background-color: white;
color: black;
height:75px;
position:relative;
font-weight: 600;

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
padding: 5px;
margin:4px;
margin-top: 8px;
`;

const Submit = styled.input`
background: #EB7326;
color: white;
font-family: sans-serif;
font-weight: 600;
font-size 17px;
border-radius:4px;
border-color:transparent;
margin:5px;
padding:7px;
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
margin:5px;
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
font-weight: 600;
font-size: 16px;
`;

const Image = styled.img`
height: 75px;
`;

const styles = {
  Container, ContainerGrid, ButtonWrap, Header, Form, Select, Submit, CityName, Button, Image,
};

export { styles as default };
