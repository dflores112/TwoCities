import styled from 'styled-components';

const Container = styled.div`
width: 90%;
margin:auto;
padding:30px;
`;
const ContainerGrid = styled.div`
padding:10px;

@media (max-width: 768px) {
display: flex;
flex-direction:column;
}
@media (min-width: 1024px) {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  }
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
@media (max-width: 768px) {
  font-weight: 500;
  font-size 14px;
    }
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
@media (max-width: 768px) {
  font-weight: 400;
  font-size 12px;
    }
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
-webkit-appearance: none;
&:hover{
  color: #EB7326;
  background: transparent;
  border: 2px solid #EB7326;
  cursor:pointer;
  transition: all .3s linear;
}
@media (max-width: 768px) {
  font-weight: 400;
  font-size 12px;
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

@media (max-width: 768px) {
font-weight: 400;
font-size 12px;
  }
`;

const CityName = styled.div`
padding:7px;
color: white;
font-weight: 600;
font-size: 16px;

@media (max-width: 768px) {
  font-weight: 400;
  font-size 12px;
    }
`;

const Image = styled.img`
height: 75px;
`;

const OverallHeader = styled.div`
color: #EB7326;
font-size: 20px;
font-weight 700;
text-align: center;
`;

const CostHeader = styled.div`
color: #EB7326;
font-size: 18px;
font-weight: 600; 
display: flex;
justify-content: center;
`;

const styles = {
  Container, CostHeader, ContainerGrid, ButtonWrap, Header, Form, Select, Submit, CityName, Button, OverallHeader, Image,
};

export { styles as default };
